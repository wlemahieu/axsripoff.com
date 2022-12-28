/**
 * SharePrompt page view
 */
import { FC } from 'react';
import { useContextSelector } from 'use-context-selector';
import styles from '@views/Share.module.css';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { ShareContext, State } from '@views/Share';
import useSetMySubmission from '@src/hooks/useSetMySubmission';
import useGetFirebaseUser from '@src/hooks/useGetFirebaseUser';
import { DateTime } from 'luxon';
import { sendEmailVerification } from 'firebase/auth';
import { GlobalContext } from '@src/components/Providers';

const SharePrompt: FC = () => {
  const verificationEmailSent = useContextSelector(GlobalContext, (c) => c.state.verificationEmailSent);
  const setGlobalState = useContextSelector(GlobalContext, (c) => c.setState);
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

  const onResend = async () => {
    if (user) {
      await sendEmailVerification(user);
      setGlobalState((s) => ({ ...s, verificationEmailSent: DateTime.now() }));
    }
  };

  return (
    <>
      {!user?.emailVerified ? (
        <Container maxWidth="md">
          <Alert severity="warning" sx={{ justifyContent: 'center' }}>
            <Box>
              Please verify the email we sent an email to: <b>{user?.email}</b>.{` `}
              <Button onClick={onResend} size="small" sx={{ height: '24px' }} disabled={Boolean(verificationEmailSent)}>
                Resend
              </Button>
            </Box>
          </Alert>
        </Container>
      ) : null}

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
          &nbsp;Be <b>truthful</b> and accurate. You can optionally provide up to 6 images to describe your situation.
          All submissions <b>will be reviewed</b> before being made live on the website.
        </Typography>
        <Button variant="contained" color="primary" onClick={onStart} disabled={!user?.emailVerified}>
          {document ? 'Continue' : 'Start'}
        </Button>
      </Container>
    </>
  );
};

export default SharePrompt;
