/**
 * Verify page view
 */
import { FC } from 'react';
import styles from '@views/Verify.module.css';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import useGetFirebaseAuth from '@src/hooks/useGetFirebaseAuth';
import useSetNotification from '@src/hooks/useSetNotification';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { useFormik } from 'formik';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  boxShadow: 24,
  p: 4,
};
type ValuesT = Record<string, string>;

const Verify: FC = () => {
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

  return (
    <Modal open={true}>
      <Container maxWidth="sm" sx={style}>
        <Typography variant="h4" gutterBottom>
          Set your password
        </Typography>
        <div className={styles.contents}>
          {' '}
          <form onSubmit={formik.handleSubmit}>
            <TextField
              disabled
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

            <Button
              fullWidth
              color="primary"
              variant="contained"
              type="submit"
              disabled={!formik.isValid || !formik.dirty}
            >
              Set
            </Button>
          </form>
        </div>
      </Container>
    </Modal>
  );
};

export default Verify;
