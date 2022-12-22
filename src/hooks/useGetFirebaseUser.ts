import { getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { onAuthStateChanged, User } from 'firebase/auth';
import { useEffect, useState } from 'react';

interface UserExtended extends User {
  reloadUserInfo?: {
    screenName: string;
  };
}

type ReturnT = UserExtended | null | undefined;

const useGetFirebaseUser = (): ReturnT => {
  const app = getApp();
  const auth = getAuth(app);
  const [user, setUser] = useState<User | UserExtended | null | undefined>();

  useEffect(() => {
    onAuthStateChanged(auth, (u) => (u ? setUser(u) : setUser(null)));
  }, []);

  return user;
};

export default useGetFirebaseUser;
