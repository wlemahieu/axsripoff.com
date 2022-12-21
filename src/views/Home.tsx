/**
 * Default home page view
 */
import { FC } from 'react';
import styles from '@views/Home.module.css';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Home: FC = () => {
  return (
    <Container maxWidth="xs" className={styles.root}>
      <Typography variant="h4" gutterBottom>
        Complaints
      </Typography>
    </Container>
  );
};

export default Home;
