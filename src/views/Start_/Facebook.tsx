/**
 * Facebook login button
 */
import svg from '@assets/facebook.svg';
import { FC } from 'react';
import styles from '@views/Login.module.css';
import { FacebookAuthProvider, signInWithPopup } from 'firebase/auth';
import useGetFirebaseAuth from '@src/hooks/useGetFirebaseAuth';
import Button from '@mui/material/Button';

const FacebookLogin: FC = () => {
  const auth = useGetFirebaseAuth();
  const signIn = () => signInWithPopup(auth, new FacebookAuthProvider());

  return (
    <Button
      onClick={signIn}
      className={styles.btn}
      variant="text"
      size="small"
      startIcon={<img src={svg} className={styles.icon} alt="" />}
    >
      Sign in with Facebook
    </Button>
  );
};

export default FacebookLogin;
