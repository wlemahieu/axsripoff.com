/**
 * Email login button
 */
import { FC, useState } from 'react';
import loginStyles from '@views/Login.module.css';
import styles from '@views/Login_/Email.module.css';
import Button from '@mui/material/Button';
import Email from '@mui/icons-material/Email';
import TextField from '@mui/material/TextField';

const EmailLogin: FC = () => {
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const onChangeEmail = (text: string) => setEmail(text);
  const onCancel = () => {
    setEmailModalOpen(false);
  };

  const signIn = () => {
    setEmailModalOpen(true);
  };

  return (
    <>
      {emailModalOpen ? (
        <div className={styles.modal}>
          Sign in with Email
          <TextField
            fullWidth
            id="email"
            label="Email"
            variant="filled"
            value={email}
            onChange={(e) => onChangeEmail(e.currentTarget.value)}
            required
          />
          <div className={styles.cancelNext}>
            <Button fullWidth color="error" variant="contained" onClick={onCancel}>
              Cancel
            </Button>
            <Button fullWidth color="primary" variant="contained">
              Next
            </Button>
          </div>
        </div>
      ) : null}
      <Button onClick={signIn} className={loginStyles.btn} variant="text" size="small" disabled>
        <Email className={loginStyles.icon} />
        <span>Sign in with email</span>
      </Button>
    </>
  );
};

export default EmailLogin;
