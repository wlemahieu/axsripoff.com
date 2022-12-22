/**
 * Global site menu navigation
 */
import { FC, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from '@components/Navigation.module.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import useGetFirebaseUser from '@src/hooks/useGetFirebaseUser';
import { getAuth, signOut } from 'firebase/auth';
import { getApp } from 'firebase/app';

const defaultTab = 'complaints';

const tabs = [
  {
    name: 'complaints',
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

const Navigation: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = useGetFirebaseUser();
  const app = getApp();
  const auth = getAuth(app);
  const signOutAuth = () => signOut(auth);

  const [key, setKey] = useState<number | boolean>(0);

  const visibleTabs = tabs.filter(
    (t) => t.isPublic || (t.isPrivate && Boolean(user)) || (t.isPrivate === false && !user),
  );
  const findTabIdx = (tab: string) => visibleTabs.findIndex((t) => t.name === tab);

  useEffect(() => {
    const p = location.pathname.replace('/', '');
    const newPath = !p ? defaultTab : p;
    const idx = findTabIdx(newPath);
    if (idx > -1) {
      setKey(idx);
    } else {
      setKey(false);
    }
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
      setKey(idx);
      navigate(url);
    }
  };

  return (
    <nav className={styles.root}>
      <Tabs value={key} onChange={handleChange} centered>
        {visibleTabs.map((tab, idx) => (
          <Tab key={`key-${idx}`} label={tab.name} id={tab.name} value={idx} />
        ))}
      </Tabs>
    </nav>
  );
};

export default Navigation;
