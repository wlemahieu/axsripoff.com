/**
 * App structure, session fetch, socket listeners
 */
import { FC, useEffect, useRef } from 'react';
import { useLocation } from 'react-router';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Routes from '@src/components/Routes';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CookiesPopup from './CookiesPopup';
import styles from './App.module.css';
import { getApp } from 'firebase/app';
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions';
import { connectAuthEmulator } from 'firebase/auth';
import useGetFirebaseAuth from '@src/hooks/useGetFirebaseAuth';

const theme = createTheme({
  typography: {
    fontFamily: 'Source Sans Pro',
    h1: {
      fontSize: '66px',
      fontWeight: 500,
    },
    h2: {
      fontSize: '56px',
      fontWeight: 500,
      marginBottom: '1rem',
    },
    h3: {
      fontSize: '46px',
    },
    h4: {
      fontSize: '36px',
    },
    h5: {
      fontSize: '26px',
    },
    h6: {
      fontSize: '18px',
      fontWeight: 600,
    },
    body2: {
      marginBottom: '1rem',
    },
  },
});

const App: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // connect to the local firebase functions / auth emulators
  if (import.meta.env.DEV) {
    const region = 'us-west1';
    const functions = getFunctions(getApp(), region);
    connectFunctionsEmulator(functions, '127.0.0.1', 5001);
    const auth = useGetFirebaseAuth();
    connectAuthEmulator(auth, 'http://localhost:9099');
  }

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView();
    }
  }, [location.pathname]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md" className={styles.root} ref={ref}>
        <Header />
        <Routes />
        <Footer />
      </Container>
      <CookiesPopup />
    </ThemeProvider>
  );
};

export default App;
