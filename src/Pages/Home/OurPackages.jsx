import { FaHeart } from "react-icons/fa6";
import usePackages from "../../Hooks/usePackages";
import MyWishList from "../MyWishList/MyWishList";
import { Link } from "react-router-dom";

const OurPackages = () => {
  const [packages] = usePackages();
  console.log(packages);
  const handleClick=()=>{
  }

  const popular = packages.filter((item) => item.category === "popular");
  return (
   <div>
     <div className="grid sm:grid-cols-2 lg:grid-cols-4">
      {popular.map((item) => (
        <MyWishList key={item._id} item={item}></MyWishList>
      ))}
     
    </div>
    <button
    onClick={handleClick}
        type="button"
        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-yellow-500 text-white hover:bg-yellow-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      ><Link to={'/allpackage'}>All Packages</Link>
      </button>
   </div>
  );
};

export default OurPackages;
