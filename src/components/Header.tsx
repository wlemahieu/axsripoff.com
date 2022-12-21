import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '@components/Header.module.css';
import Typography from '@mui/material/Typography';
import Navigation from '@components/Navigation';
import Link from '@mui/material/Link';

const Header: FC = () => {
  const navigate = useNavigate();
  return (
    <header className={styles.root}>
      <Link onClick={() => navigate('/')} color="inherit" className={styles.link}>
        <Typography variant="h1" gutterBottom>
          axsripoff.com
        </Typography>
      </Link>
      <Navigation />
    </header>
  );
};

export default Header;
