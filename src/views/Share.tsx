/**
 * Share page view
 */
import { Dispatch, FC, SetStateAction, useState } from 'react';
import { createContext, Context } from 'use-context-selector';
import styles from '@views/Share.module.css';
import SharePrompt from './Share_/SharePrompt';
import ShareForm from './Share_/ShareForm';
import { FileValidated } from '@dropzone-ui/react';

export interface ShareI {
  started: boolean;
  setStarted: Dispatch<SetStateAction<boolean>>;
  files: FileValidated[];
  setFiles: Dispatch<SetStateAction<FileValidated[]>>;
}

export const ShareContext = createContext<ShareI | null>(null) as Context<ShareI>;

const Share: FC = () => {
  const [started, setStarted] = useState(false);
  const [files, setFiles] = useState<any>([]);

  return (
    <ShareContext.Provider value={{ started, setStarted, files, setFiles }}>
      <div className={styles.root}>{!started ? <SharePrompt /> : <ShareForm />}</div>
    </ShareContext.Provider>
  );
};

export default Share;
