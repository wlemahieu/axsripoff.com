/**
 * Twitter login button
 */
import svg from '@assets/twitter.svg';
import { FC } from 'react';
import styles from '@views/Login.module.css';
import { TwitterAuthProvider, signInWithPopup } from 'firebase/auth';
import useGetFirebaseAuth from '@src/hooks/useGetFirebaseAuth';
import Button from '@mui/material/Button';

const TwitterLogin: FC = () => {
  const auth = useGetFirebaseAuth();
  const signIn = () => signInWithPopup(auth, new TwitterAuthProvider());

  return (
    <Button
      onClick={signIn}
      className={styles.btn}
      variant="text"
      size="small"
      startIcon={<img src={svg} className={styles.icon} alt="" />}
    >
      Sign in with Twitter
    </Button>
  );
};

export default TwitterLogin;
