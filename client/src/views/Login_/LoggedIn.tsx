/**
 * Logged-in page view
 */
import { Component } from 'solid-js';
import { getAuth, signOut } from 'firebase/auth';
import { useFirebaseApp } from 'solid-firebase';

const LoggedIn: Component = () => {
  const app = useFirebaseApp();
  const signOutAuth = () => signOut(getAuth(app));

  return <button onClick={signOutAuth}>Sign out</button>;
};

export default LoggedIn;
