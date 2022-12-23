/**
 * SharePrompt page view
 */
import { FC } from 'react';
import { useContextSelector } from 'use-context-selector';
import { doc, setDoc } from 'firebase/firestore';
import styles from '@views/Share.module.css';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import { Button } from '@mui/material';
import { ShareContext } from '@views/Share';
import useGetFirestore from '@src/hooks/useGetFirestore';
import useGetFirebaseUser from '@src/hooks/useGetFirebaseUser';

const SharePrompt: FC = () => {
  const document = useContextSelector(ShareContext, (c) => c.document);
  const setStarted = useContextSelector(ShareContext, (c) => c.setStarted);
  const db = useGetFirestore();
  const user = useGetFirebaseUser();
  const uid = user?.uid as string;

  const addDocument = async () => {
    try {
      const docRef = await setDoc(doc(db, 'submissions', uid), {
        displayName: '',
        complaint: '',
        images: false,
      });
      return docRef;
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  const onStart = async () => {
    setStarted(true);
    if (!document) {
      addDocument();
    }
  };

  return (
    <Container maxWidth="xs" className={styles.root}>
      <Typography variant="h4" gutterBottom>
        {document ? 'Continue' : 'Start'} your complaint.
      </Typography>
      <Typography variant="body2" gutterBottom>
        {document ? (
          <span>Thanks for starting your complaint!</span>
        ) : (
          <span>Sharing your complaint is simple and free!</span>
        )}
        &nbsp;Be <b>truthful</b> and accurate. You can optionally provide up to 6 images to describe your situation. All
        submissions <b>will be reviewed</b> before being made live on the website.
      </Typography>
      {document === undefined ? (
        <CircularProgress />
      ) : (
        <Button variant="contained" color="primary" onClick={onStart}>
          {document ? 'Continue' : 'Start'}
        </Button>
      )}
    </Container>
  );
};

export default SharePrompt;
