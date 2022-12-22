/**
 * Start page view
 */
import { FC } from 'react';
import useGetFirebaseUser from '@src/hooks/useGetFirebaseUser';
import LoggedOut from '@src/views/Start_/LoggedOut';
import styles from '@views/Login.module.css';

const Start: FC = () => {
  const user = useGetFirebaseUser();
  return <div className={styles.root}>{!user ? <LoggedOut /> : null}</div>;
};

export default Start;
