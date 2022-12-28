import { FC } from 'react';
import { useContextSelector } from 'use-context-selector';
import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { EmailModalContext } from '../EmailModal';
import styles from './CreateAccount.module.css';
import useGetFirebaseAuth from '@src/hooks/useGetFirebaseAuth';
import { sendPasswordResetEmail } from '@firebase/auth';
import useSetNotification from '@src/hooks/useSetNotification';
import { EmailContext } from '../Email';

type ValuesT = Record<string, string>;

const Forgot: FC = () => {
  const setChoice = useContextSelector(EmailModalContext, (c) => c?.setChoice);
  const setModalOpen = useContextSelector(EmailContext, (c) => c?.setModalOpen);
  const auth = useGetFirebaseAuth();
  const setNotification = useSetNotification();

  const validate = (values: Record<string, string>) => {
    const errors: ValuesT = {};
    const { email, password } = values;
    if (!email?.length) {
      errors.email = 'No email address entered';
    }
    if (password?.length < 10) {
      errors.password = 'Password must be at least 10 characters long';
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: (values) => {
      const { email } = values;
      (async () => {
        try {
          await sendPasswordResetEmail(auth, email);
          setNotification({
            title: 'Reset password email sent',
            message: 'Please check your email for a reset password link',
            severity: 'info',
            open: true,
          });
          onCancel();
          setModalOpen(false);
        } catch (e: unknown) {
          setNotification({
            title: 'Cannot send verification email',
            message: 'There was a problem sending the verification email',
            severity: 'error',
            open: true,
          });
        }
      })();
    },
    validate,
  });

  const onCancel = () => {
    setChoice('');
    formik.resetForm();
  };

  return (
    <>
      <Typography variant="h6">Forgot Password</Typography>

      <form onSubmit={formik.handleSubmit}>
        <TextField
          autoComplete="off"
          fullWidth
          id="email"
          name="email"
          label="Email"
          type="email"
          variant="filled"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={!!formik.errors.email && formik.touched.email}
          helperText={formik.touched.email && formik.errors.email}
          required
        />
        <ButtonGroup fullWidth className={styles.actions}>
          <Button variant="contained" color="warning" onClick={onCancel}>
            Cancel
          </Button>
          <Button
            fullWidth
            color="primary"
            variant="contained"
            type="submit"
            disabled={!formik.isValid || !formik.dirty}
          >
            Send Reset Link
          </Button>
        </ButtonGroup>
      </form>
    </>
  );
};

export default Forgot;
