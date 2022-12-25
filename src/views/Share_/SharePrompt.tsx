/**
 * SharePrompt page view
 */
import { FC } from 'react';
import { useContextSelector } from 'use-context-selector';
import styles from '@views/Share.module.css';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import { Button } from '@mui/material';
import { ShareContext, State } from '@views/Share';
import useSetMySubmission from '@src/hooks/useSetMySubmission';
import useGetFirebaseUser from '@src/hooks/useGetFirebaseUser';
import { DateTime } from 'luxon';

const SharePrompt: FC = () => {
  const document = useContextSelector(ShareContext, (c) => c.document);
  const setState = useContextSelector(ShareContext, (c) => c.setState);
  const user = useGetFirebaseUser();
  const setDocument = useSetMySubmission();

  const onStart = async () => {
    // return false;

    if (!document && user) {
      await setDocument({
        createdAt: DateTime.now().toISO(),
        email: user?.email || '',
        displayName: '',
        complaint: '',
        images: [],
        state: State.Created,
        unsubmitCount: 0,
      });
    }
    setState(State.Created);
  };

  return (
    <Container maxWidth="xs" className={styles.root}>
      <Typography variant="h3" gutterBottom>
        {document ? 'Continue' : 'Start'} complaint
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
