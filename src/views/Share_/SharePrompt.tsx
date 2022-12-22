/**
 * SharePrompt page view
 */
import { FC } from 'react';
import { useContextSelector } from 'use-context-selector';
import styles from '@views/Share.module.css';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import { ShareContext } from '@views/Share';

const SharePrompt: FC = () => {
  const setStarted = useContextSelector(ShareContext, (c) => c.setStarted);
  const onStart = () => setStarted(true);

  return (
    <Container maxWidth="xs" className={styles.root}>
      <Typography variant="h4" gutterBottom>
        Share your complaint.
      </Typography>
      <Typography variant="body2" gutterBottom>
        Sharing your complaint is simple and free! Be <b>truthful</b> and accurate. You can optionally provide up to 3
        images to describe your situation. All submissions <b>will be reviewed</b> before being made live on the
        website.
      </Typography>
      <Button variant="contained" color="primary" onClick={onStart} disabled>
        Start
      </Button>
    </Container>
  );
};

export default SharePrompt;
