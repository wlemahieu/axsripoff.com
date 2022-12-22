import { Typography } from '@mui/material';
import { FC } from 'react';

const CreateAccount: FC = () => {
  return (
    <>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Create account
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Do
      </Typography>
    </>
  );
};

export default CreateAccount;
