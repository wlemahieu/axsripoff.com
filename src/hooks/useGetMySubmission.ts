import { useState } from 'react';
import { useContextSelector } from 'use-context-selector';
import { doc, getDoc } from 'firebase/firestore';
import useGetFirestore from '@src/hooks/useGetFirestore';
import { ShareContext } from '@views/Share';
import useGetFirebaseUID from './useGetFirebaseUID';

type GetDocumentT = () => void;

const useGetMySubmission = (): [boolean, GetDocumentT] => {
  const [loading, setLoading] = useState(false);
  const db = useGetFirestore();
  const uid = useGetFirebaseUID();
  const setDocument = useContextSelector(ShareContext, (c) => c?.setDocument);

  const getDocument: GetDocumentT = async () => {
    setLoading(true);
    try {
      const docRef = doc(db, 'submissions', uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setDocument(data);
        setLoading(false);
        return data;
      } else {
        setDocument(undefined);
        setLoading(false);
        return false;
      }
    } catch (e) {
      console.error('Error getting document: ', e);
      setLoading(false);
    }
  };

  return [loading, getDocument];
};

export default useGetMySubmission;
