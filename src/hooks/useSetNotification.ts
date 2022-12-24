import { NotificationI } from '@src/components/Notification';
import { GlobalContext } from '@src/components/Providers';
import { useContextSelector } from 'use-context-selector';

const useSetNotification = () => {
  const setState = useContextSelector(GlobalContext, (c) => c?.setState);

  const setNotification = (notification: Partial<NotificationI>) => {
    setState((s) => ({ ...s, notification: { ...s.notification, ...notification } }));
  };

  return setNotification;
};

export default useSetNotification;
