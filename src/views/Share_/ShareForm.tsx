/**
 * ShareForm component
 */
import { FC, useEffect, useState } from 'react';
import { useContextSelector } from 'use-context-selector';
import { useFormik } from 'formik';
import md5 from 'md5';
import styles from '@views/Share_/ShareForm.module.css';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ShareContext, State } from '@views/Share';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ImageUpload from './ImageUpload';
import { getApp } from 'firebase/app';
import { getStorage, ref, getDownloadURL, StorageReference, getMetadata, FullMetadata } from '@firebase/storage';
import { doc, deleteDoc, DocumentData } from 'firebase/firestore';
import useGetFirebaseUser from '@src/hooks/useGetFirebaseUser';
import useGetFirestore from '@src/hooks/useGetFirestore';
import { useNavigate } from 'react-router';
import useSetMySubmission from '@src/hooks/useSetMySubmission';
import { FileValidated, createSyntheticFile, makeSynthticFileValidate, UPLOADSTATUS } from '@dropzone-ui/react';
import { Modal } from '@mui/material';
import useSetNotification from '@src/hooks/useSetNotification';

interface FileValidatedE extends FileValidated {
  imageUrl?: string;
}

const modalStyle = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

type ValuesT = Record<string, string>;

const ShareForm: FC = () => {
  const files = useContextSelector(ShareContext, (c) => c.files);
  const setFiles = useContextSelector(ShareContext, (c) => c.setFiles);
  const state = useContextSelector(ShareContext, (c) => c.state);
  const setState = useContextSelector(ShareContext, (c) => c.setState);
  const document = useContextSelector(ShareContext, (c) => c.document);
  const [isPreview, setIsPreview] = useState(false);

  const user = useGetFirebaseUser();
  const uid = user?.uid as string;
  const db = useGetFirestore();
  const app = getApp();
  const storage = getStorage(app);
  const navigate = useNavigate();
  const setDocument = useSetMySubmission();
  const setNotification = useSetNotification();

  useEffect(() => {
    (async () => {
      if (document) {
        const d = document as DocumentData;
        if (d.images.length) {
          // get file references
          const references = d.images.map((fileName: string) => {
            return ref(storage, `submissions/${fileName}`);
          });
          // get file urls and metadata
          const urlData = await Promise.all(
            references.map((ref: StorageReference) => {
              return Promise.all([getDownloadURL(ref), getMetadata(ref)]);
            }),
          );
          // create synthetic files from already uploaded files
          const syntheticFiles = urlData.map(([url, metadata]: [string, FullMetadata]) => {
            const fileFromCDNUrl = createSyntheticFile(metadata.name, metadata.size, metadata.contentType);
            const validateFileFromCDNUrl = makeSynthticFileValidate(
              fileFromCDNUrl,
              true,
              'success' as UPLOADSTATUS,
              undefined,
            ) as FileValidatedE;
            validateFileFromCDNUrl.imageUrl = url;
            return validateFileFromCDNUrl;
          });
          setFiles(syntheticFiles);
        }
      }
    })();
  }, [document]);

  const onCancel = () => {
    setState(State.Void);
    formik.resetForm();
  };

  const validate = (values: Record<string, string>) => {
    const errors: ValuesT = {};
    const { complaint, displayName } = values;
    if (!complaint?.length) {
      errors.complaint = 'No complaint entered';
    }
    if (!displayName?.length) {
      errors.displayName = 'No display name entered';
    }
    return errors;
  };

  const onRemove = async () => {
    try {
      const docRef = doc(db, 'submissions', uid);
      await deleteDoc(docRef);
      navigate('/');
    } catch (e) {
      console.error('Error removing document: ', e);
    }
  };

  const onSubmit = (values: Record<string, string>) => {
    if (isPreview) {
      // for future
      setIsPreview(true);
    } else {
      // actually submitting
      try {
        // deal with uploaded files
        if (files?.length) {
          // create a map of file names
          const hashMap = files.map((f: unknown) => {
            const file = f as FileValidated;
            const hashName = md5(`${file.file.name}-${user?.uid}`);
            return hashName;
          });
          const doc = document as DocumentData;
          if (doc.unsubmitCount >= 5) {
            setNotification({
              title: 'Cannot submit again',
              message: 'Too many unsubmits - please contact support!',
              severity: 'error',
              open: true,
            });
          } else {
            // update firebase document
            setDocument({
              ...values,
              images: hashMap,
              state: State.Submitted,
            });
            setState(State.Submitted);
          }
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: document as Record<string, string>,
    onSubmit,
    validate,
  });

  return (
    <>
      <Modal
        component="div"
        open={false}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container maxWidth="md" sx={modalStyle}>
          PREVIEW BOX
        </Container>
      </Modal>
      <Container maxWidth="sm" className={styles.root}>
        <Typography variant="h5" gutterBottom>
          {state === State.Created ? 'Creating' : 'Editing'} free complaint
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id="displayName"
            name="displayName"
            label="Display Name"
            variant="filled"
            value={formik.values.displayName}
            onChange={formik.handleChange}
            error={!!formik.errors.displayName && formik.touched.displayName}
            helperText={formik.touched.displayName && formik.errors.displayName}
            required
          />
          <TextField
            multiline
            minRows={5}
            maxRows={50}
            fullWidth
            id="complaint"
            name="complaint"
            label="Description of the complaint"
            variant="filled"
            value={formik.values.complaint}
            onChange={formik.handleChange}
            error={!!formik.errors.complaint && formik.touched.complaint}
            helperText={formik.touched.complaint && formik.errors.complaint}
            required
          />

          <Typography variant="h6" gutterBottom style={{ marginTop: '1rem' }}>
            Share up to 6 images (optional)
          </Typography>
          <ImageUpload />

          <ButtonGroup fullWidth className={styles.actions}>
            <Button variant="contained" color="warning" onClick={onCancel}>
              Cancel
            </Button>
            <Button fullWidth color="primary" variant="contained" type="submit" disabled={!formik.isValid}>
              Submit
            </Button>
          </ButtonGroup>

          <Button
            variant="text"
            onClick={onRemove}
            style={{ marginTop: '4rem', fontSize: '10px', color: 'black' }}
            disableRipple
            disableTouchRipple
            disableFocusRipple
            disableElevation
          >
            Remove complaint
          </Button>
        </form>
      </Container>
    </>
  );
};

export default ShareForm;
