import { Alert, AlertColor, AlertTitle, Snackbar } from '@mui/material';
import { FC } from 'react';
import { GlobalContext, NotificationI } from '@src/components/App';
import { useContextSelector } from 'use-context-selector';
import useSetNotification from '@src/hooks/useSetNotification';

const Notification: FC = () => {
  const notification = useContextSelector(GlobalContext, (c) => c?.state?.notification) as NotificationI;
  const setNotification = useSetNotification();

  const handleClose = () => {
    setNotification({ open: false });
  };

  if (notification) {
    const { title, message, severity, open } = notification;
    return (
      <Snackbar
        autoHideDuration={4000}
        open={open}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={handleClose}
      >
        <Alert severity={severity as AlertColor}>
          <AlertTitle>{title}</AlertTitle>
          {message}
        </Alert>
      </Snackbar>
    );
  }
  return null;
};

export default Notification;
