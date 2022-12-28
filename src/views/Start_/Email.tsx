/**
 * Email login button
 */
import { Dispatch, FC, SetStateAction, useState } from 'react';
import { createContext, Context } from 'use-context-selector';

import loginStyles from '@views/Login.module.css';
import Button from '@mui/material/Button';
import Email from '@mui/icons-material/Email';
import EmailModal from './EmailModal';

export interface EmailI {
  modalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const EmailContext = createContext<EmailI | null>(null) as Context<EmailI>;

const EmailLogin: FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const onStart = () => setModalOpen(true);

  return (
    <EmailContext.Provider value={{ modalOpen, setModalOpen }}>
      {modalOpen ? <EmailModal /> : null}
      <Button onClick={onStart} className={loginStyles.btn} variant="text" size="small">
        <Email className={loginStyles.icon} />
        <span>Sign in with email</span>
      </Button>
    </EmailContext.Provider>
  );
};

export default EmailLogin;
