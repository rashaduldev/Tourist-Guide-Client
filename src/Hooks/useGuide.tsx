import { useEffect, useState } from "react";
import type { Guide } from "@/types";

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL ??
  "https://tourist-guide-server-tawny.vercel.app";

const useGuide = () => {
  const [guide, setGuide] = useState<Guide[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`${API_BASE}/guides`)
      .then((res) => res.json())
      .then((data) => {
        setGuide(data);
        setLoading(false);
      });
  }, []);
  return [guide, loading] as const;
};

export default useGuide;
