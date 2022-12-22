/**
 * Default home page view
 */
import { FC } from 'react';
import styles from '@views/Home.module.css';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router';
import useGetFirebaseUser from '@src/hooks/useGetFirebaseUser';

const Home: FC = () => {
  const navigate = useNavigate();
  const user = useGetFirebaseUser();

  const onClick = () => {
    if (user) {
      navigate('/share');
    } else {
      navigate('/start');
    }
  };

  return (
    <Container maxWidth="xs" className={styles.root}>
      <Typography variant="h4" gutterBottom>
        Complaints
      </Typography>
      <Button variant="contained" color="primary" onClick={onClick}>
        Share your story
      </Button>
    </Container>
  );
};

export default Home;
