import { useContext } from 'use-context-selector';
import { FirebaseContext } from '@src/main';
import { FirebaseApp } from '@firebase/app';

const useGetFirebaseApp = (): FirebaseApp | null => {
  return useContext(FirebaseContext);
};

export default useGetFirebaseApp;
