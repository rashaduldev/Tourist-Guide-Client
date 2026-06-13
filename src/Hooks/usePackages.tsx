"use client";

import { useEffect, useState } from "react";
import type { TourPackage } from "@/types";
import { getPackages } from "@/app/actions/data";

const usePackages = () => {
  const [packages, setPackages] = useState<TourPackage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    getPackages().then((data) => {
      if (!active) return;
      setPackages(data);
      setLoading(false);
    });
    return () => {
      active = false;
    };
  }, []);

  return [packages, loading] as const;
};

export default usePackages;
