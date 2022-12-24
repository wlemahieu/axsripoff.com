/**
 * App structure, session fetch, socket listeners
 */
import styles from './App.module.css';
import { Dispatch, FC, SetStateAction, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Routes from '@src/components/Routes';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CookiesPopup from './CookiesPopup';
import { FileValidated } from '@dropzone-ui/react';
import { Context, createContext } from 'use-context-selector';
import Notification from './Notification';

export interface NotificationI {
  title?: string;
  message?: string;
  severity?: string;
  open?: boolean;
}

export interface StateI {
  notification?: NotificationI;
}

export interface GlobalContextI {
  state: StateI;
  setState: Dispatch<SetStateAction<StateI>>;
}

export const GlobalContext = createContext<GlobalContextI | null>(null) as Context<GlobalContextI>;

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

export interface FileValidatedE extends FileValidated {
  imageUrl?: string;
}

const App: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const location = useLocation();

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
      <Notification />
    </ThemeProvider>
  );
};

const GlobalProvider: FC = () => {
  const [state, setState] = useState({});

  return (
    <GlobalContext.Provider value={{ state, setState }}>
      <App />
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
