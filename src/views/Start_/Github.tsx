/**
 * Github login button
 */
import svg from '@assets/github.svg';
import { FC } from 'react';
import styles from '@views/Login.module.css';
import { GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import useGetFirebaseAuth from '@src/hooks/useGetFirebaseAuth';
import Button from '@mui/material/Button';

const GithubLogin: FC = () => {
  const auth = useGetFirebaseAuth();
  const signIn = () => signInWithPopup(auth, new GithubAuthProvider());

  return (
    <Button disabled onClick={signIn} className={styles.btn} variant="text" size="small">
      <img src={svg} className={styles.icon} alt="" />
      <span>Sign in with Github</span>
    </Button>
  );
};

export default GithubLogin;
