/**
 * A hook for tracking tabs visible to the user based on state
 */

import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import useGetFirebaseUser from './useGetFirebaseUser';
import { getAuth, signOut } from 'firebase/auth';
import { getApp } from 'firebase/app';

const defaultTab = 'complaints';

interface TabI {
  name: string;
  isPublic?: boolean;
  isPrivate?: boolean;
}

type TabsT = Array<Partial<TabI>>;

export const tabs: TabsT = [
  {
    name: 'complaints',
    isPublic: true,
  },
  {
    name: 'problems',
    isPublic: true,
  },
  {
    name: 'about',
    isPublic: true,
  },
  {
    name: 'start',
    isPrivate: false,
  },
  {
    name: 'share',
    isPrivate: true,
  },
  {
    name: 'logout',
    isPrivate: true,
  },
];

type HandleChangeT = (event: React.SyntheticEvent) => void;
type VisibleKeyT = number;
type ReturnT = [TabsT, VisibleKeyT, HandleChangeT];

const useGetTabs = (): ReturnT => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = useGetFirebaseUser();
  const app = getApp();
  const auth = getAuth(app);
  const signOutAuth = () => signOut(auth);
  const [visibleKey, setVisibleKey] = useState(0);

  const visibleTabs = tabs.filter(
    (t) => t.isPublic || (t.isPrivate && Boolean(user)) || (t.isPrivate === false && !user),
  );

  const findTabIdx = (tab: string) => visibleTabs.findIndex((t) => t.name === tab);

  useEffect(() => {
    const p = location.pathname.replace('/', '');
    const newPath = !p ? defaultTab : p;
    const idx = findTabIdx(newPath);
    setVisibleKey(idx);
  }, [location.pathname, user]);

  const handleChange = (event: React.SyntheticEvent) => {
    const target = event.target as HTMLElement;
    const { id } = target;
    const url = id === defaultTab ? `/` : `/${id}`;
    const idx = findTabIdx(id);

    if (id === `logout`) {
      (async () => {
        await signOutAuth();
        navigate('/');
      })();
    } else {
      setVisibleKey(idx);
      navigate(url);
    }
  };

  return [visibleTabs, visibleKey, handleChange];
};

export default useGetTabs;
