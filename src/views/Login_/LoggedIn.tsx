/**
 * Logged-in page view
 */
import { FC } from 'react';
import { signOut } from 'firebase/auth';
import useGetFirebaseAuth from '@src/hooks/useGetFirebaseAuth';

const LoggedIn: FC = () => {
  const auth = useGetFirebaseAuth();
  const signOutAuth = () => signOut(auth);

  return <button onClick={signOutAuth}>Sign out</button>;
};

export default LoggedIn;
