import { Box, Divider } from '@mui/material';
import { FC } from 'react';
import SubmissionImages from './Images';

interface PropsI {
  document: any;
}

const PublicSubmission: FC<PropsI> = ({ document }: PropsI) => {
  return (
    <Box sx={{ p: 2 }}>
      <Divider>AXS Complaint</Divider>
      <Box>From {document.displayName}:</Box>
      <Box>"{document.complaint}"</Box>
      <SubmissionImages images={document?.images} />
    </Box>
  );
};

export default PublicSubmission;
