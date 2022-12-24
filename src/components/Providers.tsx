/**
 * Provides configuration and state to the app
 */
import { Dispatch, FC, SetStateAction, useState } from 'react';
import { Context, createContext } from 'use-context-selector';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import App from '@components/App';
import useCreateTheme from '@src/hooks/useCreateTheme';
import { NotificationI } from '@components/Notification';

export interface StateI {
  notification?: NotificationI;
}

export interface GlobalContextI {
  state: StateI;
  setState: Dispatch<SetStateAction<StateI>>;
}

export const GlobalContext = createContext<GlobalContextI | null>(null) as Context<GlobalContextI>;

const Providers: FC = () => {
  const [state, setState] = useState({});
  const theme = useCreateTheme();
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
