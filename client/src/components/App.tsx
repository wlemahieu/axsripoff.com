/**
 * App structure, session fetch, socket listeners
 */
import { Accessor, Component, createContext, createEffect, createSignal, onMount, Show } from 'solid-js';
import { createStore, SetStoreFunction, Store } from 'solid-js/store';
import { Router } from '@solidjs/router';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Navigation from '@components/Navigation';
import Routes from '@src/Routes';
import CssBaseline from '@suid/material/CssBaseline';
import Container from '@suid/material/Container';

const functionURL = 'https://coinsponge-com-5awxk26zha-uw.a.run.app';

const v1GetMyUser = async (): Promise<string> => {
  const url = import.meta.env.PROD ? functionURL : 'http://localhost:4444';
  const path = '/v1/me';
  const results = await fetch(`${url}${path}`, {
    method: 'GET',
    credentials: 'include',
  });
  return await results.text();
};

interface DefaultValuesI {
  sessionID: string;
}

type StoreT = [Store<DefaultValuesI>, SetStoreFunction<DefaultValuesI>];

const defaultValues: DefaultValuesI = {
  sessionID: '',
};

export type AppContextT = [DefaultValuesI, Accessor<WebSocket>];
export const AppContext = createContext<AppContextT>();

const App: Component = () => {
  const [state, setState]: StoreT = createStore(defaultValues);
  const [wss] = createSignal<WebSocket>(new WebSocket('ws://localhost:4444'));

  onMount(async () => {
    const sessionID = await v1GetMyUser();
    setState('sessionID', () => sessionID);
  });

  createEffect(() => {
    const ws = wss();
    // Connection opened

    ws.addEventListener('open', (event: Event) => {
      // console.log('ws open event = ', event);
    });

    // Connection closed
    ws.addEventListener('close', (event: CloseEvent) => {
      // console.log('ws close event = ', event);
    });

    // Listen for messages

    ws.addEventListener('message', (event: MessageEvent) => {
      const data = JSON.parse(event.data);
      console.log('message', data);
    });
  });

  return (
    <>
      <CssBaseline />
      <AppContext.Provider value={[state, wss]}>
        <Show when={true}>
          <Router>
            <Container maxWidth="md">
              <Header />
              <Navigation />
              <Routes />
              <Footer />
            </Container>
          </Router>
        </Show>
      </AppContext.Provider>
    </>
  );
};

export default App;
