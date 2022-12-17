/**
 * Twitter login button
 */
import svg from '@assets/twitter.svg';
import { Component } from 'solid-js';
import styles from '@views/Login.module.css';
import { TwitterAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { useFirebaseApp } from 'solid-firebase';
import Button from '@suid/material/Button';

const TwitterLogin: Component = () => {
  const app = useFirebaseApp();
  const signIn = () => signInWithPopup(getAuth(app), new TwitterAuthProvider());

  return (
    <Button
      disabled
      onClick={signIn}
      class={styles.btn}
      variant="text"
      size="small"
      startIcon={<img src={svg} class={styles.icon} alt="" />}
    >
      Sign in with Twitter
    </Button>
  );
};

export default TwitterLogin;
