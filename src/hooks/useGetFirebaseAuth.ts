import { Auth, getAuth } from 'firebase/auth';
import { getApp } from 'firebase/app';

const useGetFirebaseAuth = (): Auth => {
  const app = getApp();
  return getAuth(app);
};

export default useGetFirebaseAuth;
