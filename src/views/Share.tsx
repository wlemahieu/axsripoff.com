/**
 * Share page view
 */
import { FC } from 'react';
import styles from '@views/Share.module.css';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';

const Share: FC = () => {
  return (
    <Container maxWidth="xs" className={styles.root}>
      <Typography variant="h4" gutterBottom>
        Share your story
      </Typography>
      <Typography variant="body2" gutterBottom>
        Sharing your story is simple and free! Be <b>truthful</b> and accurate. You can optionally provide up to 3
        images to describe your situation. All submissions <b>will be reviewed</b> before being made live on the
        website.
      </Typography>
      <Button variant="contained" color="primary">
        Start
      </Button>
    </Container>
  );
};

export default Share;
