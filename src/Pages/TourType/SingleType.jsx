import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Details from "./Details";
import useAxiosPublick from "../../Hooks/useAxiosPublick";

const SingleType = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosPublick = useAxiosPublick();
  const params = useParams();

  useEffect(() => {
    axiosPublick.get('/packages')
      .then((res) => {
        setPackages(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching packages:', err);
        setLoading(false);
      });
  }, [axiosPublick]);

  const filteredPackages = packages.filter((item) => item.tour_type === params.name.toLowerCase());

  return (
    <div className="lg:mx-36">
      <h1 className="text-5xl text-center uppercase font-bold my-5">{params.name}</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        {loading ? (
          <div className="text-center text-white">Loading...</div>
        ) : (
          filteredPackages.map((item) => (
            <Details item={item} key={item._id} />
          ))
        )}
      </div>
    </div>
  );
};

export default SingleType;
