"use client";

import { useParams } from "next/navigation";
import useGuide from "../../../Hooks/useGuide";

const TourGuideProfile = () => {
  const params = useParams<{ id: string }>();
  const id = params?.id;
  const [guides] = useGuide();
  const profile = guides.find((g: any) => g.id == id);

  return <div>{profile?.name}</div>;
};

export default TourGuideProfile;
