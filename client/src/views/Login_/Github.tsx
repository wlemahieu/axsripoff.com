/**
 * Github login button
 */
import svg from '@assets/github.svg';
import { Component } from 'solid-js';
import styles from '@views/Login.module.css';
import { GithubAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { useFirebaseApp } from 'solid-firebase';
import Button from '@suid/material/Button';

const GithubLogin: Component = () => {
  const app = useFirebaseApp();
  const signIn = () => signInWithPopup(getAuth(app), new GithubAuthProvider());

  return (
    <Button onClick={signIn} class={styles.btn} variant="text" size="small">
      <img src={svg} class={styles.icon} alt="" />
      <span>Sign in with Google</span>
    </Button>
  );
};

export default GithubLogin;
