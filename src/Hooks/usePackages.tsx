"use client";

import { useQuery } from "@tanstack/react-query";
import type { TourPackage } from "@/types";
import { getPackages } from "@/app/actions/data";

const usePackages = () => {
  const { data: packages = [], isLoading } = useQuery<TourPackage[]>({
    queryKey: ["packages"],
    queryFn: () => getPackages(),
  });
  return [packages, isLoading] as const;
};

export default usePackages;
