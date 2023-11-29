import usePackages from "../../Hooks/usePackages";
import AllPackages from "./AllPackages";


const Packages = () => {
    const [packages] = usePackages();
    return (
        <div>
              <h1 className="text-5xl font-bold text-center my-5">All Packages  {packages.length}</h1>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-5 my-10">
         {
                packages.map((pack) =><AllPackages pack={pack} key={pack._id}></AllPackages>)
            }
         </div>
        </div>
    );
};

export default Packages;