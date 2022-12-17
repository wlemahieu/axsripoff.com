/**
 * Login page view
 */
import { Component, createEffect } from 'solid-js';
import styles from '@views/Login.module.css';
import { getAuth } from 'firebase/auth';
import { useAuth, useFirebaseApp } from 'solid-firebase';
import LoggedIn from './Login_/LoggedIn';
import LoggedOut from './Login_/LoggedOut';

const Login: Component = () => {
  const app = useFirebaseApp();
  const auth = useAuth(getAuth(app));

  createEffect(() => {
    console.log('authState data', auth.data);
    console.log('authState loading', auth.loading);
    console.log('authState error', auth.error);
  });

  return <div class={styles.root}>{!auth.data ? <LoggedOut /> : <LoggedIn />}</div>;
};

export default Login;
