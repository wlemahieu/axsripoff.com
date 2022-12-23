/**
 * App entry point, load css & render App component on root
 */
import './reset.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from '@firebase/app';
import { initializeAppCheck, ReCaptchaV3Provider } from '@firebase/app-check';
import { getAnalytics, logEvent } from '@firebase/analytics';
import { connectAuthEmulator, getAuth } from '@firebase/auth';
import { getFunctions, connectFunctionsEmulator } from '@firebase/functions';
import { getFirestore, connectFirestoreEmulator } from '@firebase/firestore';

import { getStorage, connectStorageEmulator } from '@firebase/storage';
import App from '@src/components/App';

const firebaseConfig = {
  apiKey: 'AIzaSyD7M3lTsghsjLnNJw4_dy39qjDbvTjIoZg',
  authDomain: 'axsripoff-com.firebaseapp.com',
  projectId: 'axsripoff-com',
  storageBucket: 'axsripoff-com.appspot.com',
  messagingSenderId: '107152835380',
  appId: '1:107152835380:web:f96552196fc70830321b61',
  measurementId: 'G-M4CR2F73FE',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
logEvent(analytics, 'app started');

initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('6LeJjokjAAAAAMlKkiNctcVueYJ-WvPZhlWvTn2a'),
  isTokenAutoRefreshEnabled: true,
});

// connect to the local emulators
if (import.meta.env.MODE === 'development' || import.meta.env.dev) {
  const region = 'us-west1';
  const functions = getFunctions(app, region);
  const storage = getStorage(app);
  const auth = getAuth(app);
  const db = getFirestore(app);
  connectFunctionsEmulator(functions, '127.0.0.1', 5001);
  connectAuthEmulator(auth, 'http://localhost:9099');
  connectStorageEmulator(storage, '127.0.0.1', 9199);
  connectFirestoreEmulator(db, '127.0.0.1', 6060);
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
