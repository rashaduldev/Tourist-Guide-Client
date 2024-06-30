import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosPublick from "../../Hooks/useAxiosPublick";

const TripDetails = () => {
    const [datafil, setDatafil] = useState([]);
    const axiosPublick = useAxiosPublick();
    const params = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosPublick.get('/packages')
            .then((res) => {
                setDatafil(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error fetching packages:', err);
                setLoading(false);
            });
    }, [axiosPublick]);

    if (loading) {
        return <div>Loading...</div>;
    }

    const newData = datafil.find((item) => item.id == params.id);
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
