import { useMemo } from "react";
import { useSelector } from "react-redux";

export const useAuth = () => {
  const { user, token, userId } = useSelector((state) => state.user.user);

  return useMemo(() => ({ user }), [user]);
  // return useMemo(() => ({ user, token, userId }), [user]);
};
