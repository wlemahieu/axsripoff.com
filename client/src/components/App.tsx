/**
 * App structure
 */
import { Component } from 'solid-js';
import { Router } from '@solidjs/router';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Navigation from '@components/Navigation';
import Routes from '@src/Routes';
import CssBaseline from '@suid/material/CssBaseline';
import Container from '@suid/material/Container';
import { getAuth, connectAuthEmulator } from 'firebase/auth';

const App: Component = () => {
  // connect to the local firebase auth emulator
  if (import.meta.env.DEV) {
    const auth = getAuth();
    connectAuthEmulator(auth, 'http://localhost:9099');
  }

  return (
    <>
      <CssBaseline />
      <Router>
        <Container maxWidth="md">
          <Header />
          <Navigation />
          <Routes />
          <Footer />
        </Container>
      </Router>
    </>
  );
};

export default App;
