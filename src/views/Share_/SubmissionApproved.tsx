import { Button, Container, Typography } from '@mui/material';
import useSetMySubmission from '@src/hooks/useSetMySubmission';
import { FC } from 'react';
import { ShareContext, State } from '@views/Share';
import { useContextSelector } from 'use-context-selector';
import { DocumentData } from '@firebase/firestore';

const SubmissionApproved: FC = () => {
  const document = useContextSelector(ShareContext, (c) => c.document);
  const setDocument = useSetMySubmission();

  const onUndo = async () => {
    try {
      if (document) {
        await setDocument({ ...(document as DocumentData), state: State.Editing });
      }
    } catch (e) {
      console.error('Error undoing submission: ', e);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4">Your submission is public!</Typography>
      <Typography variant="body2">
        Your AXS complaint submission was reviewed and deemed reasonable to be made public. Your submission is now live
        on AXSRipoff.com for others to read! We appreciate you sharing your public opinion and honest account of your
        experience regarding AXS.
      </Typography>
      <Button
        variant="text"
        onClick={onUndo}
        style={{ marginTop: '4rem', fontSize: '10px', color: 'black' }}
        disableRipple
        disableTouchRipple
        disableFocusRipple
        disableElevation
      >
        Remove Post
      </Button>
    </Container>
  );
};

export default SubmissionApproved;
