import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore, doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';
import { getAuth, Auth } from 'firebase/auth';
import { SiteDataState } from '../context/SiteDataContext';

export interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

const FIREBASE_STORAGE_CONFIG_KEY = 'fc_firebase_custom_config_v1';

// Default config from env variables if provided
export const getDefaultFirebaseConfig = (): FirebaseConfig => {
  const env = (import.meta as any).env || {};
  return {
    apiKey: env.VITE_FIREBASE_API_KEY || '',
    authDomain: env.VITE_FIREBASE_AUTH_DOMAIN || '',
    projectId: env.VITE_FIREBASE_PROJECT_ID || 'franciscocarle-portfolio',
    storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET || '',
    messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID || '',
    appId: env.VITE_FIREBASE_APP_ID || '',
  };
};

export const getSavedFirebaseConfig = (): FirebaseConfig => {
  try {
    const saved = localStorage.getItem(FIREBASE_STORAGE_CONFIG_KEY);
    if (saved) {
      return { ...getDefaultFirebaseConfig(), ...JSON.parse(saved) };
    }
  } catch (e) {
    console.error('Error loading saved Firebase config:', e);
  }
  return getDefaultFirebaseConfig();
};

export const saveFirebaseConfig = (config: FirebaseConfig) => {
  try {
    localStorage.setItem(FIREBASE_STORAGE_CONFIG_KEY, JSON.stringify(config));
  } catch (e) {
    console.error('Error saving Firebase config:', e);
  }
};

let app: FirebaseApp | null = null;
let db: Firestore | null = null;
let auth: Auth | null = null;

export const initFirebase = (customConfig?: FirebaseConfig): { app: FirebaseApp | null; db: Firestore | null; auth: Auth | null } => {
  const config = customConfig || getSavedFirebaseConfig();

  // If apiKey or projectId is not set, don't crash
  if (!config.apiKey || !config.projectId) {
    return { app: null, db: null, auth: null };
  }

  try {
    if (!getApps().length) {
      app = initializeApp(config);
    } else {
      app = getApp();
    }
    db = getFirestore(app);
    auth = getAuth(app);
    return { app, db, auth };
  } catch (error) {
    console.error('Firebase initialization failed:', error);
    return { app: null, db: null, auth: null };
  }
};

// Firestore Site Content Collection & Document
export const FIRESTORE_COLLECTION = 'site_content';
export const FIRESTORE_DOC_ID = 'landing_page';

/**
 * Fetch site content from Cloud Firestore database
 */
export const fetchSiteDataFromFirestore = async (): Promise<SiteDataState | null> => {
  const { db } = initFirebase();
  if (!db) return null;

  try {
    const docRef = doc(db, FIRESTORE_COLLECTION, FIRESTORE_DOC_ID);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data() as SiteDataState;
    }
  } catch (error) {
    console.warn('Could not fetch from Firestore (check rules/connection):', error);
  }
  return null;
};

/**
 * Save and persist site content to Cloud Firestore database
 */
export const saveSiteDataToFirestore = async (data: SiteDataState): Promise<boolean> => {
  const { db } = initFirebase();
  if (!db) return false;

  try {
    const docRef = doc(db, FIRESTORE_COLLECTION, FIRESTORE_DOC_ID);
    // Sanitize data (remove functions, undefined, etc.)
    const cleanData = JSON.parse(JSON.stringify(data));
    await setDoc(docRef, cleanData, { merge: true });
    return true;
  } catch (error) {
    console.error('Error saving to Firestore:', error);
    return false;
  }
};

/**
 * Listen for real-time changes in Firestore database
 */
export const subscribeToFirestoreSiteData = (onDataUpdate: (data: SiteDataState) => void): (() => void) => {
  const { db } = initFirebase();
  if (!db) return () => {};

  try {
    const docRef = doc(db, FIRESTORE_COLLECTION, FIRESTORE_DOC_ID);
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        onDataUpdate(docSnap.data() as SiteDataState);
      }
    }, (err) => {
      console.warn('Firestore subscription warning:', err);
    });
    return unsubscribe;
  } catch (e) {
    console.error('Failed to subscribe to Firestore:', e);
    return () => {};
  }
};
