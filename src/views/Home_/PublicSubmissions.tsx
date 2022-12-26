import { useEffect, useState } from 'react';

import useGetPublicSubmissions from '@src/hooks/useGetPublicSubmissions';
import { SubmissionI } from '@src/hooks/useSetMySubmission';
import PublicSubmission from './Submission';
import { Box, CircularProgress, Skeleton } from '@mui/material';

const PublicSubmissions = () => {
  const [loadingPublicSubmissions, getPublicSubmissions] = useGetPublicSubmissions();
  const [documents, setDocuments] = useState<Array<SubmissionI>>([]);

  useEffect(() => {
    (async () => {
      const submissions = await getPublicSubmissions();
      setDocuments(submissions);
    })();
  }, []);

  if (loadingPublicSubmissions) {
    return (
      <Box sx={{ position: 'relative', mt: 2 }}>
        <Skeleton variant="rounded" width="100%" height={150} />
        <CircularProgress sx={{ position: 'absolute', top: '35%', left: '46%' }} />
      </Box>
    );
  }

  return (
    <Box sx={{ pt: 2 }}>
      {documents.map((doc, key) => (
        <PublicSubmission key={`key-${key}`} document={doc} index={documents.length - key} />
      ))}
    </Box>
  );
};

export default PublicSubmissions;
