/**
 * App entry point, load css & render App component on root
 */
import './reset.css';
import './index.css';
import { render } from 'solid-js/web';
import App from '@components/App';
import { FirebaseProvider } from 'solid-firebase';
import { initializeApp as initFirebase } from 'firebase/app';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';
import { getAnalytics, logEvent } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyD7M3lTsghsjLnNJw4_dy39qjDbvTjIoZg',
  authDomain: 'axsripoff-com.firebaseapp.com',
  projectId: 'axsripoff-com',
  storageBucket: 'axsripoff-com.appspot.com',
  messagingSenderId: '107152835380',
  appId: '1:107152835380:web:f96552196fc70830321b61',
  measurementId: 'G-M4CR2F73FE',
};

const app = initFirebase(firebaseConfig);
const analytics = getAnalytics(app);
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('6LeJjokjAAAAAMlKkiNctcVueYJ-WvPZhlWvTn2a'),
  isTokenAutoRefreshEnabled: true,
});
logEvent(analytics, 'app started');

render(
  () => (
    <FirebaseProvider config={firebaseConfig}>
      <App />
    </FirebaseProvider>
  ),
  document.getElementById('root') as HTMLElement,
);
