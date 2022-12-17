/**
 * Apple login button
 */
import svg from '@assets/apple.svg';
import { Component } from 'solid-js';
import styles from '@views/Login.module.css';
import { OAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { useFirebaseApp } from 'solid-firebase';
import Button from '@suid/material/Button';

const AppleLogin: Component = () => {
  const app = useFirebaseApp();
  const signIn = () => signInWithPopup(getAuth(app), new OAuthProvider('apple.com'));

  return (
    <Button disabled onClick={signIn} class={styles.btn} variant="text" size="small">
      <img src={svg} class={styles.icon} alt="" />
      <span>Sign in with Apple</span>
    </Button>
  );
};

export default AppleLogin;
