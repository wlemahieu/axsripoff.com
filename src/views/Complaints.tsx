/**
 * Default complaints page view
 */
import { FC } from 'react';
import styles from '@views/Complaints.module.css';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router';
import useGetFirebaseUser from '@src/hooks/useGetFirebaseUser';
import PublicSubmissions from '@views/Home_/PublicSubmissions';

const Complaints: FC = () => {
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
    <Container maxWidth="sm" className={styles.root}>
      <Typography variant="h3" gutterBottom>
        Complaints
      </Typography>
      <Button variant="contained" color="primary" onClick={onClick}>
        Share your complaint
      </Button>
      <PublicSubmissions />
    </Container>
  );
};

export default Complaints;
