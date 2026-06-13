"use client";

import { useParams } from "next/navigation";
import usePackages from "@/Hooks/usePackages";

const TripDetails = () => {
    const [datafil, loading] = usePackages();
    const params = useParams<{ id: string }>();
    const id = params?.id;

    if (loading) {
        return <div>Loading...</div>;
    }

    const newData = datafil.find((item: any) => item.id == id);
    if (!newData) {
        return <div>No data found</div>;
    }

    const { image } = newData;

    return (
        <div>
            <img src={image} alt="Trip" />
        </div>
    );
};

export default TripDetails;
