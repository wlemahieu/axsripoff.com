/**
 * Email login button
 */
import { Component, createSignal, Show } from 'solid-js';
import loginStyles from '@views/Login.module.css';
import styles from '@views/Login_/Email.module.css';
import { getAuth, RecaptchaVerifier, PhoneAuthProvider, signInWithCredential } from 'firebase/auth';
import { useFirebaseApp } from 'solid-firebase';
import Button from '@suid/material/Button';
import Email from '@suid/icons-material/Email';
import TextField from '@suid/material/TextField';

const EmailLogin: Component = () => {
  const app = useFirebaseApp();
  const auth = getAuth(app);
  const [emailModalOpen, setEmailModalOpen] = createSignal(false);
  const [email, setEmail] = createSignal('');
  const onChangeEmail = (text: string) => setEmail(text);
  const onCancel = () => {
    setEmailModalOpen(false);
  };

  const signIn = () => {
    setEmailModalOpen(true);
  };

  return (
    <>
      <Show when={emailModalOpen()}>
        <div class={styles.modal}>
          Sign in with Email
          <TextField
            fullWidth
            id="email"
            label="Email"
            variant="filled"
            value={email()}
            onChange={(e) => onChangeEmail(e.currentTarget.value)}
            required
          />
          <div class={styles.cancelNext}>
            <Button fullWidth color="error" variant="contained" onClick={onCancel}>
              Cancel
            </Button>
            <Button fullWidth color="primary" variant="contained">
              Next
            </Button>
          </div>
        </div>
      </Show>
      <Button disabled onClick={signIn} class={loginStyles.btn} variant="text" size="small" disabled>
        <Email class={loginStyles.icon} />
        <span>Sign in with email</span>
      </Button>
    </>
  );
};

export default EmailLogin;
