/**
 * Apple login button
 */
import styles from '@views/Login.module.css';
import svg from '@assets/apple.svg';
import { FC } from 'react';
import { OAuthProvider, signInWithPopup } from 'firebase/auth';
import useGetFirebaseAuth from '@src/hooks/useGetFirebaseAuth';
import Button from '@mui/material/Button';

const AppleLogin: FC = () => {
  const auth = useGetFirebaseAuth();
  const signIn = () => signInWithPopup(auth, new OAuthProvider('apple.com'));

  return (
    <Button
      disabled
      onClick={signIn}
      className={styles.btn}
      variant="text"
      size="small"
      style={{ backgroundColor: 'lightgrey' }}
    >
      <img src={svg} className={styles.icon} alt="" />
      <span>Sign in with Apple</span>
    </Button>
  );
};

export default AppleLogin;
