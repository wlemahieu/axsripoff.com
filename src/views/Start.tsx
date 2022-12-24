/**
 * Start page view
 */
import { FC } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import useGetFirebaseUser from '@src/hooks/useGetFirebaseUser';
import LoggedOut from '@src/views/Start_/LoggedOut';
import styles from '@views/Login.module.css';

const Start: FC = () => {
  const user = useGetFirebaseUser();
  return (
    <Container maxWidth="xs" className={styles.root}>
      <Typography variant="h4" gutterBottom>
        Start
      </Typography>
      {!user ? <LoggedOut /> : null}
    </Container>
  );
};

export default Start;
