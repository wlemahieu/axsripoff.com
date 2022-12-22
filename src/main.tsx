/**
 * App entry point, load css & render App component on root
 */
import './reset.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '@src/components/App';
import { initializeApp, FirebaseApp } from 'firebase/app';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';
import { createContext } from 'use-context-selector';
import { getAnalytics, logEvent } from 'firebase/analytics';

export const FirebaseContext = createContext<FirebaseApp | null>(null);

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

const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('6LeJjokjAAAAAMlKkiNctcVueYJ-WvPZhlWvTn2a'),
  isTokenAutoRefreshEnabled: true,
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <FirebaseContext.Provider value={app}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FirebaseContext.Provider>
  </React.StrictMode>,
);
