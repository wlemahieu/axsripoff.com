/**
 * Global site menu navigation
 */
import { FC } from 'react';
import styles from '@components/Navigation.module.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import useGetTabs from '@src/hooks/useGetTabs';

const Navigation: FC = () => {
  const [visibleTabs, visibleKey, handleChange] = useGetTabs();

  return (
    <nav className={styles.root}>
      <Tabs value={visibleKey} onChange={handleChange} centered textColor="secondary" indicatorColor="secondary">
        {visibleTabs.map((tab, idx) => (
          <Tab key={`key-${idx}`} label={tab.name} id={tab.name} value={idx} sx={{ color: '#fff' }} />
        ))}
      </Tabs>
    </nav>
  );
};

export default Navigation;
