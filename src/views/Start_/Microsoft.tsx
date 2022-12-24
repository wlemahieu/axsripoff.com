/**
 * Microsoft login button
 */
import svg from '@assets/microsoft.svg';
import { FC } from 'react';
import styles from '@views/Login.module.css';
import { OAuthProvider, signInWithPopup } from 'firebase/auth';
import useGetFirebaseAuth from '@src/hooks/useGetFirebaseAuth';
import Button from '@mui/material/Button';

const MicrosoftLogin: FC = () => {
  const auth = useGetFirebaseAuth();
  const signIn = () => signInWithPopup(auth, new OAuthProvider('microsoft.com'));

  return (
    <Button onClick={signIn} className={styles.btn} variant="text" size="small">
      <img src={svg} className={styles.icon} alt="" />
      <span>Sign in with Microsoft</span>
    </Button>
  );
};

export default MicrosoftLogin;
