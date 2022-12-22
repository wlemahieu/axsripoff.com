/**
 * Contact page view
 */
import { FC } from 'react';
import { useFormik } from 'formik';
import { getFunctions, httpsCallable } from '@firebase/functions';
import { FirebaseApp, getApp } from '@firebase/app';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import styles from '@views/Contact.module.css';

type ValuesT = Record<string, string>;

const Contact: FC = () => {
  const app = getApp();
  const region = 'us-west1';
  const functions = getFunctions(app as FirebaseApp, region);
  const sendEmail = (values: ValuesT) => {
    const { email, inquiry, name, phone, company } = values;
    const text = `
      NAME: ${name}<br/>
      EMAIL: ${email}<br/>
      PHONE: ${phone}<br/>
      COMPANY: ${company}<br/>
      INQUIRY: ${inquiry}
    `;
    const sendEmail = httpsCallable(functions, 'sendEmail');
    sendEmail({ text });
  };

  const validate = (values: Record<string, string>) => {
    const errors: ValuesT = {};
    const { email, name, inquiry } = values;
    if (!email?.length) {
      errors.email = 'No email entered';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = 'Invalid email format';
    }
    if (!name?.length) {
      errors.name = 'No name entered';
    }
    if (!inquiry?.length) {
      errors.inquiry = 'No inquiry entered';
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      company: '',
      phone: '',
      inquiry: '',
    },
    onSubmit: (values) => {
      sendEmail(values);
      formik.resetForm();
    },
    validate,
  });

  return (
    <Container maxWidth="xs" className={styles.root}>
      <Typography variant="h4" gutterBottom>
        Contact
      </Typography>
      <div className={styles.form}>
        <Typography variant="body2" gutterBottom>
          Serious inquiries only please:
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Name"
            variant="filled"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={!!formik.errors.name && formik.touched.name}
            helperText={formik.touched.name && formik.errors.name}
            required
          />
          <TextField
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
            id="company"
            name="company"
            label="Company"
            type="company"
            variant="filled"
            value={formik.values.company}
            onChange={formik.handleChange}
            error={!!formik.errors.company && formik.touched.company}
            helperText={formik.errors.company}
          />
          <TextField
            fullWidth
            id="phone"
            name="phone"
            label="Phone"
            type="phone"
            variant="filled"
            value={formik.values.phone}
            onChange={formik.handleChange}
            error={!!formik.errors.phone}
            helperText={formik.errors.phone}
          />
          <TextField
            fullWidth
            id="inquiry"
            name="inquiry"
            label="Inquiry"
            type="inquiry"
            variant="filled"
            value={formik.values.inquiry}
            onChange={formik.handleChange}
            error={!!formik.errors.inquiry && formik.touched.inquiry}
            helperText={formik.touched.inquiry && formik.errors.inquiry}
            required
          />
          <Button
            fullWidth
            color="primary"
            variant="contained"
            type="submit"
            disabled={!formik.isValid || !formik.dirty}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Contact;
