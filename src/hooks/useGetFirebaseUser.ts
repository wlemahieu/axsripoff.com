import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { useContext } from 'use-context-selector';
import { FirebaseContext } from '@src/main';
import { FirebaseApp } from '@firebase/app';
import { useEffect, useState } from 'react';

type ReturnT = User | null | undefined;

const useGetFirebaseUser = (): ReturnT => {
  const app = useContext(FirebaseContext);
  const auth = getAuth(app as FirebaseApp);
  const [user, setUser] = useState<User | null | undefined>();

  useEffect(() => {
    onAuthStateChanged(auth, (u) => (u ? setUser(u) : setUser(null)));
  }, []);

  return user;
};

export default useGetFirebaseUser;
