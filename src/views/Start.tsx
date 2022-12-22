/**
 * Start page view
 */
import { FC } from 'react';
import styles from '@views/Login.module.css';
import useGetFirebaseUser from '@src/hooks/useGetFirebaseUser';
import LoggedIn from '@views/Login_/LoggedIn';
import LoggedOut from '@views/Login_/LoggedOut';

const Start: FC = () => {
  const user = useGetFirebaseUser();
  return <div className={styles.root}>{!user ? <LoggedOut /> : <LoggedIn />}</div>;
};

export default Start;
