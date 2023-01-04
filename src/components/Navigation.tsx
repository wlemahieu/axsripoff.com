/**
 * Global site menu navigation
 */
import { FC } from 'react';
import styles from '@components/Navigation.module.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import useGetTabs from '@src/hooks/useGetTabs';
import { startCase } from 'lodash';

const Navigation: FC = () => {
  const [visibleTabs, visibleKey, handleChange] = useGetTabs();

  return (
    <nav className={styles.root}>
      <Tabs
        value={visibleKey}
        onChange={handleChange}
        centered
        textColor="secondary"
        indicatorColor="secondary"
        sx={{ cursor: 'pointer' }}
      >
        {visibleTabs.map((tab, idx) => (
          <Tab
            key={`key-${idx}`}
            label={startCase(tab.name)}
            id={tab.name}
            value={idx}
            sx={{ color: '#fff', pointerEvents: 'auto', cursor: 'pointer' }}
          />
        ))}
      </Tabs>
    </nav>
  );
};

export default Navigation;
