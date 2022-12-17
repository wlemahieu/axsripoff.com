/**
 * Google login button
 */
import svg from '@assets/google.svg';
import { Component } from 'solid-js';
import styles from '@views/Login.module.css';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { useFirebaseApp } from 'solid-firebase';
import Button from '@suid/material/Button';

const GoogleLogin: Component = () => {
  const app = useFirebaseApp();
  const signIn = () => signInWithPopup(getAuth(app), new GoogleAuthProvider());

  return (
    <Button onClick={signIn} class={styles.btn} variant="text" size="small">
      <img src={svg} class={styles.icon} alt="" />
      <span>Sign in with Google</span>
    </Button>
  );
};

export default GoogleLogin;
