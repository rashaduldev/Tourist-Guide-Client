"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getPackages } from "@/app/actions/data";

const TripDetails = () => {
    const [datafil, setDatafil] = useState<any[]>([]);
    const params = useParams<{ id: string }>();
    const id = params?.id;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getPackages().then((data) => {
            setDatafil(data);
            setLoading(false);
        });
    }, []);

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
