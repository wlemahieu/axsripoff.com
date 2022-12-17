/**
 * Facebook login button
 */
import svg from '@assets/facebook.svg';
import { Component } from 'solid-js';
import styles from '@views/Login.module.css';
import { FacebookAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { useFirebaseApp } from 'solid-firebase';
import Button from '@suid/material/Button';

const FacebookLogin: Component = () => {
  const app = useFirebaseApp();
  const signIn = () => signInWithPopup(getAuth(app), new FacebookAuthProvider());

  return (
    <Button
      onClick={signIn}
      class={styles.btn}
      variant="text"
      size="small"
      startIcon={<img src={svg} class={styles.icon} alt="" />}
    >
      Sign in with Facebook
    </Button>
  );
};

export default FacebookLogin;
