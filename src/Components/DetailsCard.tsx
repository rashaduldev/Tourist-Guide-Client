"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import SingleCard from "./SingleCard";
import usePackages from "../Hooks/usePackages";
import type { TourPackage } from "@/types";

const DetailsCard = () => {
  const [data, setData] = useState<TourPackage>({});
  const [packages] = usePackages();
  const params = useParams<{ id: string }>();
  const id = params?.id;

  useEffect(() => {
    const findcard = packages.find(
      (daata: any) => daata.id == id || daata._id == id,
    );
    setData(findcard ?? {});
  }, [id, packages]);

  return (
    <div>
      <SingleCard data={data} />
    </div>
  );
};

export default DetailsCard;
