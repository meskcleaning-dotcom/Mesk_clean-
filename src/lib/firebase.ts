import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';
import firebaseConfig from '../../firebase-applet-config.json';

// reCAPTCHA v3 Site Key for Firebase App Check
export const RECAPTCHA_SITE_KEY = '6LfSheUtAAAAAG6aSlHw1YYX9szET675P-Aml1t-';

declare global {
  interface Window {
    FIREBASE_APPCHECK_DEBUG_TOKEN?: boolean | string;
    __firebaseAppCheckInitialized?: boolean;
  }
}

export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);

// Lazy initialization for App Check / reCAPTCHA (deferred from initial page load)
export const ensureAppCheck = () => {
  if (typeof window !== 'undefined' && !window.__firebaseAppCheckInitialized) {
    window.__firebaseAppCheckInitialized = true;
    try {
      if (location.hostname === 'localhost') {
        (window as any).FIREBASE_APPCHECK_DEBUG_TOKEN = true;
      }

      initializeAppCheck(app, {
        provider: new ReCaptchaV3Provider(RECAPTCHA_SITE_KEY),
        isTokenAutoRefreshEnabled: true,
      });
    } catch (error) {
      console.error('Firebase App Check initialization failed:', error);
    }
  }
};

// Lazy Auth getter so firebase/auth is only loaded for admin/login pages
export const getAuthInstance = () => {
  return getAuth(app);
};

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
  };
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  let authUser = null;
  try {
    authUser = getAuthInstance().currentUser;
  } catch {}

  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: authUser?.uid,
      email: authUser?.email,
      emailVerified: authUser?.emailVerified,
    },
    operationType,
    path,
  };
  console.error('Firestore Error:', JSON.stringify(errInfo));
  return new Error(JSON.stringify(errInfo));
}
