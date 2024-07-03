import { useMemo } from "react";
import { useSelector } from "react-redux";

export const useFriends = () => {
  const { friends } = useSelector((state) => state.friends.friends);

  return useMemo(() => ({ friends }), [friends]);
};
