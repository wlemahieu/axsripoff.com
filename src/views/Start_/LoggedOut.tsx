/**
 * Logged-out page view
 */
import { FC } from 'react';
import styles from '@views/Start_/LoggedOut.module.css';
import Container from '@mui/material/Container';
import GoogleLogin from './Google';
import FacebookLogin from './Facebook';
import TwitterLogin from './Twitter';
import EmailLogin from './Email';
import MicrosoftLogin from './Microsoft';
import { Typography } from '@mui/material';

const LoggedOut: FC = () => {
  return (
    <Container maxWidth="xs">
      <Typography variant="h6" gutterBottom>
        Please login in to share your complaint.
      </Typography>
      <Typography variant="body2" gutterBottom>
        We do not sell or share any of your information ever.
      </Typography>
      <div className={styles.root}>
        <EmailLogin />
        <GoogleLogin />
        <FacebookLogin />
        <TwitterLogin />
        <MicrosoftLogin />
        <span>By continuing, you are indicating that you accept our Terms of Service and Privacy Policy.</span>
      </div>
    </Container>
  );
};

export default LoggedOut;
