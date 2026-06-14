"use client";

import { useParams } from "next/navigation";
import Details from "./Details";
import usePackages from "@/Hooks/usePackages";
import SectionHeading from "@/components/shared/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/lib/motion";

const SingleType = () => {
  const [packages, loading] = usePackages();
  const params = useParams<{ name: string }>();
  const name = params?.name;

  const filteredPackages = packages.filter(
    (item: any) => item.tour_type === (name ?? "").toLowerCase(),
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="ট্যুরের ধরন"
        title={(name ?? "").toString()}
        subtitle="এই ধরনের সকল প্যাকেজ একনজরে দেখে নিন।"
      />

      {loading ? (
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="h-80 animate-pulse rounded-2xl border border-border bg-muted dark:border-border dark:bg-muted"
            />
          ))}
        </div>
      ) : filteredPackages.length > 0 ? (
        <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredPackages.map((item: any) => (
            <StaggerItem key={item._id ?? item.id}>
              <Details item={item} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      ) : (
        <div className="my-24 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted text-3xl dark:bg-muted">
            🧭
          </div>
          <p className="text-lg font-semibold text-foreground dark:text-white">
            এই ধরনে কোনো প্যাকেজ পাওয়া যায়নি
          </p>
        </div>
      )}
    </div>
  );
};

export default SingleType;
