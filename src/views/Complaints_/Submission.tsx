import { Box, Divider } from '@mui/material';
import { DateTime } from 'luxon';
import { FC } from 'react';
import SubmissionImages from './Images';

interface PropsI {
  document: any;
  index: number;
}

const PublicSubmission: FC<PropsI> = ({ document, index }: PropsI) => {
  const date = DateTime.fromISO(document.createdAt).toLocaleString(DateTime.DATE_SHORT);
  return (
    <Box sx={{ p: 2 }}>
      <Divider>AXS Complaint #{index}</Divider>
      <Box>
        From {document.displayName} on {date}
      </Box>
      <Box>"{document.complaint}"</Box>
      <SubmissionImages images={document?.images} />
    </Box>
  );
};

export default PublicSubmission;
