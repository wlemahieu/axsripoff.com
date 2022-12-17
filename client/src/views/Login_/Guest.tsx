/**
 * Guest login button
 */
import { Component } from 'solid-js';
import styles from '@views/Login.module.css';
import { signInAnonymously, getAuth } from 'firebase/auth';
import { useFirebaseApp } from 'solid-firebase';
import Button from '@suid/material/Button';
import AccountBoxIcon from '@suid/icons-material/AccountBox';

const GuestLogin: Component = () => {
  const app = useFirebaseApp();
  const signIn = () => {
    try {
      signInAnonymously(getAuth(app));
    } catch (e) {
      console.log('e', e);
    }
  };

  return (
    <Button onClick={signIn} class={styles.btn} variant="text" size="small">
      <AccountBoxIcon class={styles.icon} />
      <span>Sign in anonymously</span>
    </Button>
  );
};

export default GuestLogin;
