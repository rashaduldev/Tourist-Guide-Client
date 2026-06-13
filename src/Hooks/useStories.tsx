"use client";

import { useQuery } from "@tanstack/react-query";
import { getStories } from "@/app/actions/data";

const useStories = (limit?: number) => {
  const { data: stories = [], isLoading } = useQuery({
    queryKey: ["stories", limit ?? "all"],
    queryFn: () => getStories(limit),
  });
  return [stories, isLoading] as const;
};

export default useStories;
