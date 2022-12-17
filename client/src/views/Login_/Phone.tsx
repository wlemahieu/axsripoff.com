/**
 * Email login button
 */
import { Component } from 'solid-js';
import styles from '@views/Login.module.css';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useFirebaseApp } from 'solid-firebase';
import Button from '@suid/material/Button';
import Email from '@suid/icons-material/Email';

const EmailLogin: Component = () => {
  const app = useFirebaseApp();
  const signIn = () => {
    try {
      signInWithEmailAndPassword(getAuth(app), 'testuser@test.com', '360parabola');
    } catch (e) {
      console.log('e', e);
    }
  };

  return (
    <Button onClick={signIn} class={styles.btn} variant="text" size="small">
      <Email class={styles.icon} />
      <span>Sign in email</span>
    </Button>
  );
};

export default EmailLogin;
