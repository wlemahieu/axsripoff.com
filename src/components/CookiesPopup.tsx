/**
 * We use cookies to give you the best online experience. By clicking "Accept Cookies" or clicking into any content on this site, you agree to allow cookies to be placed. To find out more visit ourcookie policy
 */

import { FC, useState } from 'react';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
import styles from '@components/CookiesPopup.module.css';
import useMediaQuery from '@mui/material/useMediaQuery';

const CookiesPopup: FC = () => {
  const navigate = useNavigate();
  const minWidth1000 = useMediaQuery('(min-width:1000px)');
  const [accepted, setAccepted] = useState(false);

  const onAccept = () => {
    setAccepted(true);
  };

  const RejectButton = () => (
    <Button
      className={`${styles.btn} ${minWidth1000 ? styles.wideBtn : ''}`}
      color="error"
      variant="contained"
      size="small"
    >
      Cookie Settings
    </Button>
  );

  const Verbiage = () => (
    <div className={styles.verbiage}>
      We use cookies to give you the best online experience. By clicking "Accept Cookies" or clicking into any content
      on this site, you agree to allow cookies to be placed. To find out more visit our{' '}
      <Link onClick={() => navigate('/cookies')}>cookie policy.</Link>
    </div>
  );

  const AcceptButton = () => (
    <Button
      className={`${styles.btn} ${minWidth1000 ? styles.wideBtn : ''}`}
      color="success"
      variant="contained"
      onClick={onAccept}
    >
      Accept Cookies
    </Button>
  );

  const WideView = () => (
    <div className={styles.root}>
      <RejectButton />
      <Verbiage />
      <AcceptButton />
    </div>
  );

  const NarrowView = () => (
    <div className={`${styles.root} ${!minWidth1000 ? styles.narrow : ''}`}>
      <Verbiage />
      <div className={styles.narrowBtns}>
        <RejectButton />
        <AcceptButton />
      </div>
    </div>
  );

  if (accepted) return null;
  return <>{minWidth1000 ? <WideView /> : <NarrowView />}</>;
};

export default CookiesPopup;
