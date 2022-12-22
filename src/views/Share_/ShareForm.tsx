/**
 * ShareForm component
 */
import { FC, useState } from 'react';
import { useContextSelector } from 'use-context-selector';
import { useFormik } from 'formik';
import md5 from 'md5';
import styles from '@views/Share_/ShareForm.module.css';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ShareContext } from '@views/Share';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ImageUpload from './ImageUpload';
import { getApp } from 'firebase/app';
import { getStorage, ref, uploadBytes } from '@firebase/storage';
import useGetFirebaseUser from '@src/hooks/useGetFirebaseUser';

type ValuesT = Record<string, string>;

const ShareForm: FC = () => {
  const files = useContextSelector(ShareContext, (c) => c.files);
  const setFiles = useContextSelector(ShareContext, (c) => c.setFiles);
  const setStarted = useContextSelector(ShareContext, (c) => c.setStarted);
  const user = useGetFirebaseUser();
  const [showUpload, setShowUpload] = useState(false);
  const app = getApp();
  const storage = getStorage(app);

  const onCancel = () => {
    setStarted(false);
    //clear form
  };

  const onShowUpload = () => setShowUpload(true);

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
    enableReinitialize: true,
    initialValues: {
      description: '',
      name: user?.reloadUserInfo?.screenName || '',
    },
    onSubmit: (values) => {
      try {
        console.log('values', values);
        const hashName = md5(`${files[0].file.name}-${user?.uid}`);
        const storageRef = ref(storage, `submissions/${hashName}`);
        // sendEmail(values);
        uploadBytes(storageRef, files[0].file)
          .then((snapshot) => {
            console.log('Uploaded a blob or file!', snapshot);
          })
          .catch((e) => console.log(e));

        formik.resetForm();
        setFiles([]);
      } catch (e) {
        console.log(e);
      }
    },
    validate,
  });

  return (
    <Container maxWidth="sm" className={styles.root}>
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
        <Button fullWidth variant="contained" color="info" onClick={onShowUpload}>
          Upload Images (optional)
        </Button>

        {showUpload ? (
          <>
            <Typography variant="h6" gutterBottom style={{ marginTop: '1rem' }}>
              Share up to 6 images (optional)
            </Typography>
            <ImageUpload />
          </>
        ) : null}
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
            Submit
          </Button>
        </ButtonGroup>
      </form>
    </Container>
  );
};

export default ShareForm;