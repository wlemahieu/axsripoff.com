import { Button, Typography } from '@mui/material';
import { FC } from 'react';
import { useContextSelector } from 'use-context-selector';
import { EmailModalContext } from '../EmailModal';

const Choice: FC = () => {
  const setChoice = useContextSelector(EmailModalContext, (c) => c?.setChoice);

  const onCreate = () => setChoice('create');
  const onSignIn = () => setChoice('signin');

  return (
    <>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Sign-in with email
      </Typography>
      <Button fullWidth variant="contained" color="primary" sx={{ marginBottom: '1rem' }} onClick={onCreate}>
        Create Account
      </Button>
      <Button fullWidth variant="contained" color="warning" onClick={onSignIn}>
        Sign in
      </Button>
    </>
  );
};

export default Choice;
