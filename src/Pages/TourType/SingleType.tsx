"use client";

import { useParams } from "next/navigation";
import Details from "./Details";
import usePackages from "@/Hooks/usePackages";

const SingleType = () => {
  const [packages, loading] = usePackages();
  const params = useParams<{ name: string }>();
  const name = params?.name;

  const filteredPackages = packages.filter((item: any) => item.tour_type === (name ?? '').toLowerCase());

  return (
    <div className="lg:mx-36">
      <h1 className="text-5xl text-center uppercase font-bold my-5">{name}</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        {loading ? (
          <div className="text-center text-white">Loading...</div>
        ) : (
          filteredPackages.map((item: any) => (
            <Details item={item} key={item._id} />
          ))
        )}
      </div>
    </div>
  );
};

export default SingleType;
