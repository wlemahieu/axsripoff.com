/**
 * Logged-out page view
 */
import { Component } from 'solid-js';
import styles from '@views/Login_/LoggedOut.module.css';
import Container from '@suid/material/Container';
import GoogleLogin from './Google';
import FacebookLogin from './Facebook';
import TwitterLogin from './Twitter';
import GithubLogin from './Github';
import EmailLogin from './Email';
import PhoneLogin from './Phone';
import MicrosoftLogin from './Microsoft';
import AppleLogin from './Apple';
import GuestLogin from './Guest';

const LoggedOut: Component = () => {
  return (
    <Container maxWidth="xs">
      <div class={styles.root}>
        <GoogleLogin />
        <FacebookLogin />
        <TwitterLogin />
        <GithubLogin />
        <EmailLogin />
        <PhoneLogin />
        <MicrosoftLogin />
        <AppleLogin />
        <GuestLogin />
        <span>By continuing, you are indicating that you accept our Terms of Service and Privacy Policy.</span>
      </div>
    </Container>
  );
};

export default LoggedOut;
