import useAuth from './useAuth';
import { Roles } from '@models';

const useHasPerrmision = (id?: string | null) => {
  const { user } = useAuth();

  return user?.role === Roles.ADMIN || user?.id === id;
};

export default useHasPerrmision;
