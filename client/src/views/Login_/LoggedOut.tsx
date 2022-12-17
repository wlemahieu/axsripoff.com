/**
 * Logged-out page view
 */
import { Component } from 'solid-js';
import styles from '@views/Login_/LoggedOut.module.css';
import GoogleLogin from './Google';
import FacebookLogin from './Facebook';
import TwitterLogin from './Twitter';
import Container from '@suid/material/Container';
import GithubLogin from './Github';
import MicrosoftLogin from './Microsoft';
import AppleLogin from './Apple';
import GuestLogin from './Guest';
import EmailLogin from './Email';

const LoggedOut: Component = () => {
  return (
    <Container maxWidth="xs">
      <div class={styles.root}>
        <GoogleLogin />
        <FacebookLogin />
        <TwitterLogin />
        <GithubLogin />
        <EmailLogin />
        <MicrosoftLogin />
        <AppleLogin />
        <GuestLogin />
      </div>
    </Container>
  );
};

export default LoggedOut;
