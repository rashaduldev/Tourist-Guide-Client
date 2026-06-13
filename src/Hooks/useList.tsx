import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import type { WishListItem } from "@/types";

const useList = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { refetch, data: list = [] } = useQuery<WishListItem[]>({
    queryKey: ["list", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/wishlists?email=${user?.email}`);
      return res.data;
    },
  });
  return [list, refetch] as const;
};

export default useList;
