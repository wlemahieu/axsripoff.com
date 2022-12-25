/**
 * Share page view
 */
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { useContextSelector } from 'use-context-selector';
import { DocumentData } from 'firebase/firestore';
import { createContext, Context } from 'use-context-selector';
import styles from '@views/Share.module.css';
import SharePrompt from './Share_/SharePrompt';
import ShareForm from './Share_/ShareForm';
import { FileValidated } from '@dropzone-ui/react';
import useGetMySubmission from '@src/hooks/useGetMySubmission';
import FormSubmitted from './Share_/FormSubmitted';
import { CircularProgress } from '@mui/material';
import SubmissionApproved from './Share_/SubmissionApproved';
import useGetFirebaseUID from '@src/hooks/useGetFirebaseUID';
import { SubmissionI } from '@src/hooks/useSetMySubmission';

export type FileT = Array<FileValidated | string>;

export enum State {
  Void = 'Void', // document not started yet
  Created = 'Created', // initial state
  Submitted = 'Submitted', // author submitted
  Editing = 'Editing', // author editing
  Approved = 'Approved', // approved, made public
  Rejected = 'Rejected', // rejected
  Removed = 'Removed', // author action
  Destroyed = 'Destroyed', // admin action
}

export interface ShareI {
  state: State;
  setState: Dispatch<SetStateAction<State>>;
  files: FileT;
  setFiles: Dispatch<SetStateAction<FileT>>;
  document: SubmissionI | undefined;
  setDocument: Dispatch<SetStateAction<SubmissionI | undefined>>;
}

export const ShareContext = createContext<ShareI | null>(null) as Context<ShareI>;

const ShareProvider: FC = () => {
  const [state, setState] = useState(State.Void);
  const [files, setFiles] = useState<FileT>([]);
  const [document, setDocument] = useState<SubmissionI>();

  return (
    <ShareContext.Provider value={{ state, setState, files, setFiles, document, setDocument }}>
      <Share />
    </ShareContext.Provider>
  );
};

const Share: FC = () => {
  const uid = useGetFirebaseUID();
  const [loadingGetSubmission, getSubmission] = useGetMySubmission();
  const document = useContextSelector(ShareContext, (c) => c.document);
  const setState = useContextSelector(ShareContext, (c) => c.setState);
  const state = useContextSelector(ShareContext, (c) => c.state);

  // essentially a mount that waits for uid to be set.
  useEffect(() => {
    if (uid && document === undefined) {
      getSubmission();
    }
  }, [uid]);

  useEffect(() => {
    if (document) {
      setState((document as DocumentData).state);
    }
  }, [document]);

  const renderSwitch = () => {
    switch (state) {
      case State.Void:
        return <SharePrompt />;
      case State.Created:
      case State.Editing:
        return <ShareForm />;
      case State.Submitted:
        return <FormSubmitted />;
      case State.Approved:
        return <SubmissionApproved />;
      default:
        return null;
    }
  };

  return <div className={styles.root}>{loadingGetSubmission ? <CircularProgress /> : renderSwitch()}</div>;
};

export default ShareProvider;
