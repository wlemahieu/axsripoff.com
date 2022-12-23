/**
 * Share page view
 */
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { doc, getDoc, DocumentData } from 'firebase/firestore';
import { createContext, Context } from 'use-context-selector';
import styles from '@views/Share.module.css';
import SharePrompt from './Share_/SharePrompt';
import ShareForm from './Share_/ShareForm';
import { FileValidated } from '@dropzone-ui/react';
import useGetFirestore from '@src/hooks/useGetFirestore';
import useGetFirebaseUser from '@src/hooks/useGetFirebaseUser';

export type DocumentT = undefined | DocumentData | boolean;

export interface ShareI {
  started: boolean;
  setStarted: Dispatch<SetStateAction<boolean>>;
  files: FileValidated[];
  setFiles: Dispatch<SetStateAction<FileValidated[]>>;
  document: DocumentT;
}

export const ShareContext = createContext<ShareI | null>(null) as Context<ShareI>;

const Share: FC = () => {
  const [started, setStarted] = useState(false);
  const [files, setFiles] = useState<any>([]);
  const db = useGetFirestore();
  const user = useGetFirebaseUser();
  const [document, setDocument] = useState<DocumentT>();
  const uid = user?.uid as string;

  // essentially a mount that waits for uid to be set.
  useEffect(() => {
    if (uid && document === undefined) {
      (async () => {
        const myDocument = await findDocument();
        setDocument(myDocument);
      })();
    }
  }, [uid]);

  const findDocument = async () => {
    try {
      const docRef = doc(db, 'submissions', uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        return false;
      }
    } catch (e) {
      console.error('Error getting document: ', e);
    }
  };

  return (
    <ShareContext.Provider value={{ started, setStarted, files, setFiles, document }}>
      <div className={styles.root}>{!started ? <SharePrompt /> : <ShareForm />}</div>
    </ShareContext.Provider>
  );
};

export default Share;
