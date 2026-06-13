"use client";

import { useEffect, useState } from "react";
import type { Guide } from "@/types";
import { getGuides } from "@/app/actions/data";

const useGuide = () => {
  const [guide, setGuide] = useState<Guide[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    getGuides().then((data) => {
      if (!active) return;
      setGuide(data);
      setLoading(false);
    });
    return () => {
      active = false;
    };
  }, []);

  return [guide, loading] as const;
};

export default useGuide;
