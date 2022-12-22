/**
 * Share page view
 */
import { Dispatch, FC, SetStateAction, useState } from 'react';
import { createContext, Context } from 'use-context-selector';
import styles from '@views/Share.module.css';
import Container from '@mui/material/Container';
import SharePrompt from './Share_/SharePrompt';
import ShareForm from './Share_/ShareForm';

export interface ShareI {
  started: boolean;
  setStarted: Dispatch<SetStateAction<boolean>>;
}

export const ShareContext = createContext<ShareI | null>(null) as Context<ShareI>;

const Share: FC = () => {
  const [started, setStarted] = useState(false);
  return (
    <ShareContext.Provider value={{ started, setStarted }}>
      <Container maxWidth="xs" className={styles.root}>
        {!started ? <SharePrompt /> : <ShareForm />}
      </Container>
    </ShareContext.Provider>
  );
};

export default Share;
