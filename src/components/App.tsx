/**
 * App structure
 */
import { FC, useEffect, useRef } from 'react';
import { useLocation } from 'react-router';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Routes from '@src/components/Routes';
import Container from '@mui/material/Container';
import CookiesPopup from '@components/CookiesPopup';
import Notification from '@components/Notification';
import styles from '@components/App.module.css';
import ImagePreviewModal from './ImagePreviewModal';

const App: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // ensure pages scroll to top
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView();
    }
  }, [location.pathname]);

  return (
    <>
      <Container maxWidth="md" className={styles.root} ref={ref}>
        <Header />
        <Routes />
        <Footer />
      </Container>
      <CookiesPopup />
      <Notification />
      <ImagePreviewModal />
    </>
  );
};

export default App;
