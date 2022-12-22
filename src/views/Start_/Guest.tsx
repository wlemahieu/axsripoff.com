/**
 * Guest login button
 */
import styles from '@views/Login.module.css';
import { FC } from 'react';
import { signInAnonymously } from '@firebase/auth';
import useGetFirebaseAuth from '@src/hooks/useGetFirebaseAuth';
import Button from '@mui/material/Button';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const GuestLogin: FC = () => {
  const auth = useGetFirebaseAuth();

  const signIn = () => signInAnonymously(auth);

  return (
    <Button onClick={signIn} className={styles.btn} variant="text" size="small">
      <AccountBoxIcon className={styles.icon} />
      <span>Sign in anonymously</span>
    </Button>
  );
};

export default GuestLogin;
