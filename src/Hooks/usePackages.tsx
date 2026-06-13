import { useEffect, useState } from "react";
import type { TourPackage } from "@/types";

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL ??
  "https://tourist-guide-server-tawny.vercel.app";

const usePackages = () => {
  const [packages, setPackages] = useState<TourPackage[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`${API_BASE}/packages`)
      .then((res) => res.json())
      .then((data) => {
        setPackages(data);
        setLoading(false);
      });
  }, []);
  return [packages, loading] as const;
};

export default usePackages;
