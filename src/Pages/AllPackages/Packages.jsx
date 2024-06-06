import { useState, useEffect } from "react";
import usePackages from "../../Hooks/usePackages";
import AllPackages from "./AllPackages";

const Packages = () => {
    const [packages] = usePackages();
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredPackages, setFilteredPackages] = useState([]);

    // Ensure filteredPackages is updated when packages change
    useEffect(() => {
        setFilteredPackages(packages);
    }, [packages]);

    const handleSearch = () => {
        if (searchQuery.trim() === "") {
            setFilteredPackages(packages);
        } else {
            const filtered = packages.filter((item) => 
                item.trip_title && item.trip_title.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredPackages(filtered);
        }
    };

    return (
        <div className="lg:mx-36">
            <h1 className="text-5xl font-bold text-center my-10 text-black">All Packages</h1>
            <div className="flex flex-col lg:flex-row mx-auto items-center text-center justify-between">
                <h1 className="text-2xl font-bold text-center my-10 text-black">Filter</h1>
                <div className="flex flex-row items-center text-center">
                    <input
                        className="flex h-[48px] w-full lg:w-96 rounded-md border border-neutral-400 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-black/60 outline-none"
                        style={{ border: "1px solid black" }}
                        type="text"
                        placeholder="Search here...."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button
                        className="text-white bg-slate-900 p-3 rounded-l-md"
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-5 my-10">
                {filteredPackages.map((pack) => (
                    <AllPackages pack={pack} key={pack.id} />
                ))}
            </div>
        </div>
    );
};

export default Packages;
