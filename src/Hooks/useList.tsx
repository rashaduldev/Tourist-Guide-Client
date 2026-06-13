"use client";

import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import { getWishlist } from "@/app/actions/secure";
import type { WishListItem } from "@/types";

const useList = () => {
  const { user } = useAuth();
  const { refetch, data: list = [] } = useQuery<WishListItem[]>({
    queryKey: ["list", user?.email],
    enabled: !!user?.email,
    queryFn: () => getWishlist(user!.email as string),
  });
  return [list, refetch] as const;
};

export default useList;
