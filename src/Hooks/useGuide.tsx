"use client";

import { useQuery } from "@tanstack/react-query";
import type { Guide } from "@/types";
import { getGuides } from "@/app/actions/data";

const useGuide = () => {
  const { data: guide = [], isLoading } = useQuery<Guide[]>({
    queryKey: ["guides"],
    queryFn: () => getGuides(),
  });
  return [guide, isLoading] as const;
};

export default useGuide;
