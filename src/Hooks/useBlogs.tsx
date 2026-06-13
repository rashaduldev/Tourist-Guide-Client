"use client";

import { useQuery } from "@tanstack/react-query";
import { getBlogs } from "@/app/actions/data";

const useBlogs = () => {
  const { data: blogs = [], isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: () => getBlogs(),
  });
  return [blogs, isLoading] as const;
};

export default useBlogs;
