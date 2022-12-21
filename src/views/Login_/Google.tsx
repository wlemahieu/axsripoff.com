/**
 * Google login button
 */
import svg from '@assets/google.svg';
import { FC } from 'react';
import styles from '@views/Login.module.css';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import useGetFirebaseAuth from '@src/hooks/useGetFirebaseAuth';
import Button from '@mui/material/Button';

const GoogleLogin: FC = () => {
  const auth = useGetFirebaseAuth();
  const signIn = () => signInWithPopup(auth, new GoogleAuthProvider());

  return (
    <Button onClick={signIn} className={styles.btn} variant="text" size="small">
      <img src={svg} className={styles.icon} alt="" />
      <span>Sign in with Google</span>
    </Button>
  );
};

export default GoogleLogin;
