import { useEffect, useState } from 'react';

import useGetPublicSubmissions from '@src/hooks/useGetPublicSubmissions';
import { SubmissionI } from '@src/hooks/useSetMySubmission';
import PublicSubmission from './Submission';
import { Box } from '@mui/material';

const PublicSubmissions = () => {
  const [, getPublicSubmissions] = useGetPublicSubmissions();
  const [documents, setDocuments] = useState<Array<SubmissionI>>([]);

  useEffect(() => {
    (async () => {
      const submissions = await getPublicSubmissions();
      setDocuments(submissions);
    })();
  }, []);

  return (
    <Box sx={{ pt: 2 }}>
      {documents.map((doc, key) => (
        <PublicSubmission key={`key-${key}`} document={doc} />
      ))}
    </Box>
  );
};

export default PublicSubmissions;
