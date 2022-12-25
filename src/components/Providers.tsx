/**
 * Provides configuration and state to the app
 */
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { Context, createContext } from 'use-context-selector';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from '@components/App';
import useCreateTheme from '@src/hooks/useCreateTheme';
import { NotificationI } from '@components/Notification';
import { getApp } from 'firebase/app';
import { useNavigate } from 'react-router';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';

export interface StateI {
  notification?: NotificationI;
  previewImgSrc?: string;
  previewImgOpen?: boolean;
  user: UserExtended;
}

export interface GlobalContextI {
  state: StateI;
  setState: Dispatch<SetStateAction<StateI>>;
}

export interface UserExtended extends User {
  reloadUserInfo?: {
    screenName: string;
  };
}

export const GlobalContext = createContext<GlobalContextI | null>(null) as Context<GlobalContextI>;

const Providers: FC = () => {
  const [state, setState] = useState({});
  const theme = useCreateTheme();

  const app = getApp();
  const navigate = useNavigate();
  const auth = getAuth(app);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setState({ user });
        navigate('/');
      } else {
        setState({ user: null });
      }
    });
  }, []);

  return (
    <GlobalContext.Provider value={{ state, setState }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </GlobalContext.Provider>
  );
};

export default Providers;
