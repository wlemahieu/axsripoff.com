import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { useContext } from 'use-context-selector';
import { FirebaseContext } from '@src/main';
import { FirebaseApp } from '@firebase/app';
import { useState } from 'react';

const useGetFirebaseUser = (): User | null => {
  const app = useContext(FirebaseContext);
  const auth = getAuth(app as FirebaseApp);
  const [user, setUser] = useState<User | null>(null);
  onAuthStateChanged(auth, (u) => (u ? setUser(u) : setUser(null)));
  return user;
};

export default useGetFirebaseUser;
