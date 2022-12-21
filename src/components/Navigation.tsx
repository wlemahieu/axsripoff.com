/**
 * Global site menu navigation
 */
import { FC, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from '@components/Navigation.module.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const defaultTab = 'complaints';
const tabs = ['complaints', 'about', 'login'];

const findTabIdx = (tab: string) => tabs.findIndex((t) => t === tab);

const Navigation: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [key, setKey] = useState<number | null>(0);

  useEffect(() => {
    const p = location.pathname.replace('/', '');
    const newPath = !p ? defaultTab : p;
    const idx = findTabIdx(newPath);
    if (idx > -1) {
      setKey(idx);
    } else {
      setKey(null);
    }
  }, [location.pathname]);

  const handleChange = (event: React.SyntheticEvent) => {
    const target = event.target as HTMLElement;
    const { id } = target;
    const url = id === defaultTab ? '/' : `/${id}`;
    const idx = findTabIdx(id);
    setKey(idx);
    navigate(url);
  };

  return (
    <nav className={styles.root}>
      <Tabs value={key} onChange={handleChange} centered>
        {tabs.map((tab, idx) => (
          <Tab key={`key-${idx}`} label={tab} id={tab} value={idx} />
        ))}
      </Tabs>
    </nav>
  );
};

export default Navigation;
