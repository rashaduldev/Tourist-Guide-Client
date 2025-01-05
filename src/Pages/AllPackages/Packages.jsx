import { useState, useEffect } from "react";
import usePackages from "../../Hooks/usePackages";
import AllPackages from "./AllPackages";

const Packages = () => {
    const [packages] = usePackages();
    const [searchQuery, setSearchQuery] = useState("");
    const [filterQuery, setFilterQuery] = useState("all");
    const [filteredPackages, setFilteredPackages] = useState([]);

    // Ensure filteredPackages is updated when packages or filters change
    useEffect(() => {
        let filtered = packages;

        if (filterQuery !== "all") {
            filtered = filtered.filter((item) =>
                item.trip_category && item.trip_category.toLowerCase() === filterQuery.toLowerCase()
            );
        }

        if (searchQuery.trim() !== "") {
            filtered = filtered.filter((item) =>
                item.trip_title && item.trip_title.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        setFilteredPackages(filtered);
    }, [packages, filterQuery, searchQuery]);

    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleFilter = (e) => {
        setFilterQuery(e.target.value);
    };

    return (
        <div className="max-w-[85rem] mx-auto">
            <h1 className="text-5xl font-bold text-center my-10 text-black">All Packages</h1>
            <div className="flex flex-row mx-auto items-center justify-between px-4">
                {/* Filter Dropdown on the Left */}
                <div className="flex flex-row items-center text-center w-full lg:w-1/3">
                    <select
                        className="flex h-[48px] w-1/2 md:w-full lg:w-64 rounded-md border border-neutral-400 font-light bg-primary px-4 py-3 text-base outline-none"
                        value={filterQuery}
                        onChange={handleFilter}
                    >
                        <option value="all">Filter your tour...</option>
                        <option value="adventure">Adventure</option>
                        <option value="leisure">Leisure</option>
                        <option value="cultural">Cultural</option>
                        {/* Add more filter options here as needed */}
                    </select>
                </div>

                {/* Search Input on the Right */}
                <div className="flex flex-row-reverse md:flex-row items-center text-center w-full lg:w-1/3 lg:justify-end">
                    <input
                        className="flex h-[48px] w-1/2 md:w-full lg:w-64 rounded-md border border-neutral-400 focus:border-accent font-light bg-primary px-4 py-3 text-base placeholder:text-black/60 outline-none"
                        type="text"
                        placeholder="Search here..."
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                    />
                </div>
            </div>

            {/* Display Filtered Packages */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-5 my-10 rounded-t-md">
                {filteredPackages.length > 0 ? (
                    filteredPackages.map((pack) => (
                        <AllPackages pack={pack} key={pack.id} />
                    ))
                ) : (
                    <div className="col-span-full text-center text-xl font-semibold text-red-500">
                        No data found
                    </div>
                )}
            </div>
        </div>
    );
};

export default Packages;
