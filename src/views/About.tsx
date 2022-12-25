/**
 * About page view
 */
import { FC } from 'react';
import styles from '@views/About.module.css';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import wes from '@assets/wes.jpg';

const About: FC = () => {
  return (
    <Container maxWidth="xs" className={styles.root}>
      <Typography variant="h3" gutterBottom>
        About
      </Typography>
      <div className={styles.memberBlock}>
        <Typography variant="body2" className={styles.description}>
          Welcome to axsripoff.com where anyone can share their negative experiences relating to AXS' website, services
          or customer support.
        </Typography>
        <Typography variant="h6" gutterBottom>
          Managing Member:
        </Typography>
        <div>
          <Avatar src={wes} variant="circular" className={styles.member} alt="A white guy in Thailand." />
          <span>Wesley LeMahieu</span>
        </div>
      </div>
    </Container>
  );
};

export default About;
