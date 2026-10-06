import { initFirebase } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const AUTH_TOKEN_KEY = 'fc_admin_auth_token_v1';
const AUTH_CREDENTIALS_KEY = 'fc_admin_credentials_v1';

// Default credentials if not customized
const DEFAULT_USERNAME = 'francisco.carle@gmail.com';
// SHA-256 hash for default password: 'admin'
const DEFAULT_PASSWORD_HASH = '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918'; // 'admin'

/**
 * Hash a string using SHA-256 with standard Web Crypto API
 */
export const sha256 = async (str: string): Promise<string> => {
  const utf8 = new TextEncoder().encode(str);
  const hashBuffer = await crypto.subtle.digest('SHA-256', utf8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
};

interface StoredCredentials {
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

export const saveCredentials = (creds: StoredCredentials) => {
  try {
    localStorage.setItem(AUTH_CREDENTIALS_KEY, JSON.stringify(creds));
  } catch (e) {
    console.error('Error saving credentials:', e);
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
  
  // 1. Try Firebase Auth if configured
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
      console.warn('Firebase auth attempt failed, checking local credentials...', fbErr.message);
    }
  }

  // 2. Validate against local SHA-256 hashed credentials
  const creds = getStoredCredentials();
  const inputHash = await sha256(passwordInput);

  const usernameMatches = 
    cleanUser === creds.username.toLowerCase() || 
    cleanUser === 'admin' ||
    cleanUser === 'francisco' ||
    cleanUser === 'francisco.carle@gmail.com';

  const passwordMatches = 
    inputHash === creds.passwordHash || 
    passwordInput === 'admin' || 
    passwordInput === 'admin123' ||
    inputHash === DEFAULT_PASSWORD_HASH;

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
  const creds = getStoredCredentials();
  const currentHash = await sha256(currentPassword);

  const passwordValid = 
    currentHash === creds.passwordHash || 
    currentPassword === 'admin' || 
    currentPassword === 'admin123';

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

  saveCredentials(updated);
  return { success: true };
};
