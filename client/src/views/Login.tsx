/**
 * Login page view
 */
import { Component } from 'solid-js';
import styles from '@views/Login.module.css';
import { getAuth } from 'firebase/auth';
import { useAuth, useFirebaseApp } from 'solid-firebase';
import LoggedIn from './Login_/LoggedIn';
import LoggedOut from './Login_/LoggedOut';

const Login: Component = () => {
  const app = useFirebaseApp();
  const auth = useAuth(getAuth(app));

  return <div class={styles.root}>{!auth.data ? <LoggedOut /> : <LoggedIn />}</div>;
};

export default Login;
