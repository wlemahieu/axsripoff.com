import { getApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';

const useGetFirestore = (): Firestore => {
  const app = getApp();
  return getFirestore(app);
};

export default useGetFirestore;
