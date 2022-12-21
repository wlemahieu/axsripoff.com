import { Auth, getAuth } from 'firebase/auth';
import { useContext } from 'use-context-selector';
import { FirebaseContext } from '@src/main';
import { FirebaseApp } from '@firebase/app';

const useGetFirebaseAuth = (): Auth => {
  const app = useContext(FirebaseContext);
  return getAuth(app as FirebaseApp);
};

export default useGetFirebaseAuth;
