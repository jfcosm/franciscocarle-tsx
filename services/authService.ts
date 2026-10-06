import { initFirebase } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const AUTH_TOKEN_KEY = 'fc_admin_auth_token_v1';
const AUTH_CREDENTIALS_KEY = 'fc_admin_credentials_v1';

// Default credentials configured for Francisco Carle
const DEFAULT_USERNAME = 'francisco.carle@gmail.com';
// SHA-256 hash for 'Manzana9'
const DEFAULT_PASSWORD_HASH = '5d39331353713114d25ccca60219c6ab2f7eb935b0e90c1cf8bf027dbd25376f';

/**
 * Hash a string using SHA-256 with standard Web Crypto API
 */
export const sha256 = async (str: string): Promise<string> => {
  const utf8 = new TextEncoder().encode(str);
  const hashBuffer = await crypto.subtle.digest('SHA-256', utf8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
};

export interface StoredCredentials {
  username: string;
  passwordHash: string;
}

export const getStoredCredentials = (): StoredCredentials => {
  try {
    const saved = localStorage.getItem(AUTH_CREDENTIALS_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.error('Error reading stored credentials:', e);
  }
  return {
    username: DEFAULT_USERNAME,
    passwordHash: DEFAULT_PASSWORD_HASH,
  };
};

export const getCloudCredentials = async (): Promise<StoredCredentials | null> => {
  const { db } = initFirebase();
  if (!db) return null;
  try {
    const docRef = doc(db, 'site_content', 'admin_security');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      if (data.username && data.passwordHash) {
        return {
          username: data.username,
          passwordHash: data.passwordHash
        };
      }
    }
  } catch (e) {
    console.warn('Could not read cloud security credentials:', e);
  }
  return null;
};

export const saveCredentials = async (creds: StoredCredentials) => {
  try {
    localStorage.setItem(AUTH_CREDENTIALS_KEY, JSON.stringify(creds));
  } catch (e) {
    console.error('Error saving local credentials:', e);
  }

  // Also sync to Cloud Firestore if connected
  const { db } = initFirebase();
  if (db) {
    try {
      const docRef = doc(db, 'site_content', 'admin_security');
      await setDoc(docRef, {
        username: creds.username,
        passwordHash: creds.passwordHash,
        updatedAt: Date.now()
      }, { merge: true });
    } catch (e) {
      console.warn('Could not sync security credentials to Firestore:', e);
    }
  }
};

export const isAuthenticated = (): boolean => {
  try {
    const token = localStorage.getItem(AUTH_TOKEN_KEY) || sessionStorage.getItem(AUTH_TOKEN_KEY);
    if (!token) return false;
    const parsed = JSON.parse(token);
    // Check if token has valid timestamp (expires after 7 days)
    if (parsed.timestamp && Date.now() - parsed.timestamp < 7 * 24 * 60 * 60 * 1000) {
      return true;
    }
  } catch (e) {
    return false;
  }
  return false;
};

export const loginAdmin = async (
  usernameInput: string,
  passwordInput: string,
  rememberMe: boolean = true
): Promise<{ success: boolean; error?: string }> => {
  const cleanUser = usernameInput.trim().toLowerCase();
  
  // 1. Try Firebase Auth if configured and input is an email
  const { auth } = initFirebase();
  if (auth && cleanUser.includes('@')) {
    try {
      await signInWithEmailAndPassword(auth, cleanUser, passwordInput);
      const tokenObj = { user: cleanUser, timestamp: Date.now(), method: 'firebase' };
      if (rememberMe) {
        localStorage.setItem(AUTH_TOKEN_KEY, JSON.stringify(tokenObj));
      } else {
        sessionStorage.setItem(AUTH_TOKEN_KEY, JSON.stringify(tokenObj));
      }
      return { success: true };
    } catch (fbErr: any) {
      // Continue to verify hash
    }
  }

  // 2. Check cloud credentials if available, fallback to local storage / default
  let creds = await getCloudCredentials();
  if (!creds) {
    creds = getStoredCredentials();
  } else {
    try {
      localStorage.setItem(AUTH_CREDENTIALS_KEY, JSON.stringify(creds));
    } catch (e) {}
  }

  const inputHash = await sha256(passwordInput);

  // Strict check: both username and SHA-256 hash must match exactly
  const usernameMatches = cleanUser === creds.username.trim().toLowerCase();
  const passwordMatches = inputHash === creds.passwordHash;

  if (usernameMatches && passwordMatches) {
    const tokenObj = { user: creds.username, timestamp: Date.now(), method: 'local' };
    if (rememberMe) {
      localStorage.setItem(AUTH_TOKEN_KEY, JSON.stringify(tokenObj));
    } else {
      sessionStorage.setItem(AUTH_TOKEN_KEY, JSON.stringify(tokenObj));
    }
    return { success: true };
  }

  return { 
    success: false, 
    error: 'Usuario o contraseña incorrectos. Verifica tus credenciales.' 
  };
};

export const logoutAdmin = () => {
  localStorage.removeItem(AUTH_TOKEN_KEY);
  sessionStorage.removeItem(AUTH_TOKEN_KEY);
};

export const changeAdminCredentials = async (
  currentPassword: string,
  newUsername: string,
  newPassword?: string
): Promise<{ success: boolean; error?: string }> => {
  let creds = await getCloudCredentials();
  if (!creds) {
    creds = getStoredCredentials();
  }

  const currentHash = await sha256(currentPassword);

  // Strict check: current password MUST match the stored password hash
  const passwordValid = currentHash === creds.passwordHash;

  if (!passwordValid) {
    return { success: false, error: 'La contraseña actual ingresada es incorrecta.' };
  }

  let newHash = creds.passwordHash;
  if (newPassword && newPassword.trim().length >= 4) {
    newHash = await sha256(newPassword.trim());
  }

  const updated: StoredCredentials = {
    username: newUsername.trim() || creds.username,
    passwordHash: newHash,
  };

  await saveCredentials(updated);
  return { success: true };
};
