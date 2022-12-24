import useGetFirebaseUser from './useGetFirebaseUser';

type ReturnT = string | undefined;

const useGetFirebaseUID = (): ReturnT => {
  const user = useGetFirebaseUser();
  return user?.uid;
};

export default useGetFirebaseUID;
