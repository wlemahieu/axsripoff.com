/**
 * Email modal
 */
import { Dispatch, FC, SetStateAction, useState } from 'react';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/material';
import { EmailContext } from './Email';
import { Context, createContext, useContextSelector } from 'use-context-selector';
import Choice from './EmailModal_/Choice';
import CreateAccount from './EmailModal_/CreateAccount';
import EmailSignIn from './EmailModal_/SignIn';

export interface EmailModalI {
  choice: string;
  setChoice: Dispatch<SetStateAction<string>>;
}

export const EmailModalContext = createContext<EmailModalI | null>(null) as Context<EmailModalI>;

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const EmailModal: FC = () => {
  const setModalOpen = useContextSelector(EmailContext, (c) => c?.setModalOpen);
  const [choice, setChoice] = useState(''); // create,signin
  const onCancel = () => {
    setModalOpen(false);
  };

  return (
    <EmailModalContext.Provider value={{ choice, setChoice }}>
      <Modal
        component="div"
        open={true}
        onClose={onCancel}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{!choice ? <Choice /> : choice === 'create' ? <CreateAccount /> : <EmailSignIn />}</Box>
      </Modal>
    </EmailModalContext.Provider>
  );
};

export default EmailModal;
