import { useContextSelector } from 'use-context-selector';
import { doc, setDoc } from 'firebase/firestore';
import useGetFirestore from '@src/hooks/useGetFirestore';
import { ShareContext, State } from '@views/Share';
import useGetFirebaseUID from './useGetFirebaseUID';

export interface SubmissionI {
  email?: string;
  displayName?: string;
  complaint?: string;
  images?: Array<string>;
  state?: State;
  unsubmitCount?: number;
}

const useSetMySubmission = () => {
  const db = useGetFirestore();
  const uid = useGetFirebaseUID();
  const setStateDocument = useContextSelector(ShareContext, (c) => c?.setDocument);

  const setDocument = async (data: SubmissionI) => {
    try {
      const docRef = await setDoc(doc(db, 'submissions', uid), data);
      setStateDocument(data);
      return docRef;
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return setDocument;
};

export default useSetMySubmission;
