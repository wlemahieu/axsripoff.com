/**
 * SharePrompt page view
 */
import { FC } from 'react';
import { useContextSelector } from 'use-context-selector';
import { useFormik } from 'formik';
import styles from '@views/Share_/ShareForm.module.css';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ShareContext } from '@views/Share';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

type ValuesT = Record<string, string>;

const ShareForm: FC = () => {
  const setStarted = useContextSelector(ShareContext, (c) => c.setStarted);
  const onCancel = () => {
    setStarted(false);
    //clear form
  };
  const onUpload = () => {
    console.log('onUpload');
  };

  const validate = (values: Record<string, string>) => {
    const errors: ValuesT = {};
    const { description, name } = values;
    if (!description?.length) {
      errors.description = 'No description entered';
    }
    if (!name?.length) {
      errors.name = 'No name entered';
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      description: '',
      name: '',
    },
    onSubmit: (values) => {
      // sendEmail(values);
      formik.resetForm();
    },
    validate,
  });

  return (
    <Container maxWidth="xs" className={styles.root}>
      <Typography variant="h6" gutterBottom>
        Creating a free complaint
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Display Name"
          variant="filled"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={!!formik.errors.name && formik.touched.name}
          helperText={formik.touched.name && formik.errors.name}
          required
        />
        <TextField
          multiline
          minRows={5}
          maxRows={50}
          fullWidth
          id="description"
          name="description"
          label="Description of the issue"
          variant="filled"
          value={formik.values.description}
          onChange={formik.handleChange}
          error={!!formik.errors.description && formik.touched.description}
          helperText={formik.touched.description && formik.errors.description}
          required
        />
        <Button fullWidth variant="contained" color="info" onClick={onUpload}>
          Upload Image
        </Button>
        <ButtonGroup fullWidth className={styles.actions}>
          <Button variant="contained" color="warning" onClick={onCancel}>
            Cancel
          </Button>
          <Button
            fullWidth
            color="primary"
            variant="contained"
            type="submit"
            disabled={Boolean(1) || !formik.isValid || !formik.dirty}
          >
            Submit
          </Button>
        </ButtonGroup>
      </form>
    </Container>
  );
};

export default ShareForm;
