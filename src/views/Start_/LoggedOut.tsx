/**
 * Logged-out page view
 */
import { FC } from 'react';
import styles from '@views/Start_/LoggedOut.module.css';
import Container from '@mui/material/Container';
import GoogleLogin from './Google';
import FacebookLogin from './Facebook';
import TwitterLogin from './Twitter';
import GithubLogin from './Github';
import EmailLogin from './Email';
import PhoneLogin from './Phone';
import MicrosoftLogin from './Microsoft';
import AppleLogin from './Apple';
import { Typography } from '@mui/material';

const LoggedOut: FC = () => {
  return (
    <Container maxWidth="xs">
      <Typography variant="h6" gutterBottom>
        Please login in to share you complaint.
      </Typography>
      <div className={styles.root}>
        <EmailLogin />
        <GoogleLogin />
        <FacebookLogin />
        <TwitterLogin />
        <GithubLogin />
        <PhoneLogin />
        <MicrosoftLogin />
        <AppleLogin />
        <span>By continuing, you are indicating that you accept our Terms of Service and Privacy Policy.</span>
      </div>
    </Container>
  );
};

export default LoggedOut;
