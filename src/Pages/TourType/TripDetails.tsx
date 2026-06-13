"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import useAxiosPublick from "../../Hooks/useAxiosPublick";

const TripDetails = () => {
    const [datafil, setDatafil] = useState<any[]>([]);
    const axiosPublick = useAxiosPublick();
    const params = useParams<{ id: string }>();
    const id = params?.id;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosPublick.get('/packages')
            .then((res: any) => {
                setDatafil(res.data);
                setLoading(false);
            })
            .catch((err: any) => {
                console.error('Error fetching packages:', err);
                setLoading(false);
            });
    }, [axiosPublick]);

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
