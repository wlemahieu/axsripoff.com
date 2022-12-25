import { GlobalContext, UserExtended } from '@src/components/Providers';
import { useContextSelector } from 'use-context-selector';

type ReturnT = UserExtended | null | undefined;

const useGetFirebaseUser = (): ReturnT => {
  return useContextSelector(GlobalContext, (c) => c?.state?.user);
};

export default useGetFirebaseUser;
