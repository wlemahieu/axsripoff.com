import useGetFirebaseUser from './useGetFirebaseUser';

const useGetFirebaseUID = (): string => {
  const user = useGetFirebaseUser();
  return user?.uid as string;
};

export default useGetFirebaseUID;
