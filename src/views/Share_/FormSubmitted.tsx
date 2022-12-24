import { Button, Container, Typography } from '@mui/material';
import useSetMySubmission from '@src/hooks/useSetMySubmission';
import { FC } from 'react';
import { ShareContext, State } from '@views/Share';
import { useContextSelector } from 'use-context-selector';
import { DocumentData } from '@firebase/firestore';

const FormSubmitted: FC = () => {
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
      <Typography variant="h4">Thank you for your submission</Typography>
      <Typography variant="body2">
        We will review your complaint as soon as possible. If it's deemed reasonable, then we will make it publicly
        available on axsripoff.com. This will help our collective effort to document all bad experiences so AXS can't
        hide from them.
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
        Undo Submit
      </Button>
    </Container>
  );
};

export default FormSubmitted;
