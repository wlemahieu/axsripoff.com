import { useState } from 'react';
import { getDocs, collection, query, where } from 'firebase/firestore';
import useGetFirestore from '@src/hooks/useGetFirestore';
import { SubmissionI } from './useSetMySubmission';

type GetDocumentsT = () => Promise<Array<SubmissionI>>;

const useGetPublicSubmissions = (): [boolean, GetDocumentsT] => {
  const [loading, setLoading] = useState(false);
  const db = useGetFirestore();

  const getDocuments: GetDocumentsT = async () => {
    setLoading(true);
    const results: Array<SubmissionI> = [];
    try {
      const submissionsRef = collection(db, 'submissions');
      const q = query(submissionsRef, where('state', '==', 'Approved'));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        results.push(doc.data());
      });

      setLoading(false);
    } catch (e) {
      console.error('Error getting documents: ', e);
      setLoading(false);
    }
    return results;
  };

  return [loading, getDocuments];
};

export default useGetPublicSubmissions;
