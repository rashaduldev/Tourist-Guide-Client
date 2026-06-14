"use client";

import { useMemo } from "react";
import { useParams } from "next/navigation";
import SingleCard from "./SingleCard";
import usePackages from "../Hooks/usePackages";
import type { TourPackage } from "@/types";

const DetailsCard = () => {
  const [packages] = usePackages();
  const params = useParams<{ id: string }>();
  const id = params?.id;

  const data = useMemo<TourPackage>(
    () =>
      packages.find((p: any) => p.id == id || p._id == id) ?? ({} as TourPackage),
    [id, packages],
  );

  return (
    <div>
      <SingleCard data={data} />
    </div>
  );
};

export default DetailsCard;
