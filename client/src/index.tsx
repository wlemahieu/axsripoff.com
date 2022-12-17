/**
 * App entry point, load css & render App component on root
 */
import './reset.css';
import './index.css';
import { render } from 'solid-js/web';
import App from '@components/App';
import { FirebaseProvider } from 'solid-firebase';
import { initializeApp as initFirebase } from 'firebase/app';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'axsripoff-com.firebaseapp.com',
  // The value of `databaseURL` depends on the location of the database
  // databaseURL: "https://DATABASE_NAME.firebaseio.com",
  projectId: 'axsripoff-com',
  // storageBucket: "PROJECT_ID.appspot.com",
  // messagingSenderId: "SENDER_ID",
  appId: 'axsripoff-com',
  // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
  // measurementId: "G-MEASUREMENT_ID",
};

initFirebase(firebaseConfig);

render(
  () => (
    <FirebaseProvider config={firebaseConfig}>
      <App />
    </FirebaseProvider>
  ),
  document.getElementById('root') as HTMLElement,
);
