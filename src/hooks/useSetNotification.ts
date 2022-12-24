import { GlobalContext, NotificationI } from '@src/components/App';
import { useContextSelector } from 'use-context-selector';

const useSetNotification = () => {
  const setState = useContextSelector(GlobalContext, (c) => c?.setState);

  const setNotification = (notification: Partial<NotificationI>) => {
    setState((s) => ({ ...s, notification: { ...s.notification, ...notification } }));
  };

  return setNotification;
};

export default useSetNotification;
