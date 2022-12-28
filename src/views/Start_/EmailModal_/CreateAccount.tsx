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
import { createUserWithEmailAndPassword, sendEmailVerification } from '@firebase/auth';
import useSetNotification from '@src/hooks/useSetNotification';
import { EmailContext } from '../Email';

type ValuesT = Record<string, string>;

const CreateAccount: FC = () => {
  const setChoice = useContextSelector(EmailModalContext, (c) => c?.setChoice);
  const setModalOpen = useContextSelector(EmailContext, (c) => c?.setModalOpen);
  const auth = useGetFirebaseAuth();
  const setNotification = useSetNotification();

  const validate = (values: Record<string, string>) => {
    const errors: ValuesT = {};
    const { email, password, confirmpassword } = values;
    if (!email?.length) {
      errors.email = 'No email address entered';
    }
    if (password?.length < 10) {
      errors.password = 'Password must be at least 10 characters long';
    }
    if (password !== confirmpassword) {
      errors.password = 'Passwords must match';
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmpassword: '',
    },
    onSubmit: (values) => {
      const { email, password } = values;
      (async () => {
        try {
          await createUserWithEmailAndPassword(auth, email, password);
          if (auth?.currentUser && !auth?.currentUser?.emailVerified) {
            await sendEmailVerification(auth.currentUser);
            setNotification({
              title: 'Thank you',
              message: 'Please check your email for a verification link',
              severity: 'info',
              open: true,
            });
            onCancel();
            setModalOpen(false);
          } else {
            setNotification({
              title: 'Thank you',
              message: 'You can now share your experience',
              severity: 'success',
              open: true,
            });
          }
        } catch (e: unknown) {
          const err = e as Record<string, string>;
          if (err.message.includes('email-already-in-use')) {
            setNotification({
              title: 'Cannot sign up',
              message: 'That email is already used',
              severity: 'error',
              open: true,
            });
          } else {
            setNotification({
              title: 'Cannot sign up',
              message: 'Invalid username / password',
              severity: 'error',
              open: true,
            });
          }
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
      <Typography variant="h6">Create Account</Typography>

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
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          variant="filled"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={!!formik.errors.password && formik.touched.password}
          helperText={formik.touched.password && formik.errors.password}
          required
        />
        <TextField
          fullWidth
          id="confirmpassword"
          name="confirmpassword"
          label="Confirm Password"
          type="password"
          variant="filled"
          value={formik.values.confirmpassword}
          onChange={formik.handleChange}
          error={!!formik.errors.confirmpassword && formik.touched.confirmpassword}
          helperText={formik.touched.confirmpassword && formik.errors.confirmpassword}
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
            Create
          </Button>
        </ButtonGroup>
      </form>
    </>
  );
};

export default CreateAccount;
