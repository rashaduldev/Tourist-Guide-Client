import { useState, useEffect } from "react";
import usePackages from "../../Hooks/usePackages";
import AllPackages from "./AllPackages";

const Packages = () => {
    const [packages, loading] = usePackages();
    const [searchQuery, setSearchQuery] = useState("");
    const [filterQuery, setFilterQuery] = useState("all");
    const [filteredPackages, setFilteredPackages] = useState([]);

    useEffect(() => {
        let filtered = packages;

        if (filterQuery !== "all") {
            filtered = filtered.filter((item) =>
                item.trip_category?.toLowerCase() === filterQuery.toLowerCase()
            );
        }

        if (searchQuery.trim() !== "") {
            filtered = filtered.filter((item) =>
                item.trip_title?.toLowerCase().includes(searchQuery.toLowerCase())
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
            <h1 className="text-5xl font-bold text-center my-10 text-black">সকল প্যাকেজ</h1>

            {/* ফিল্টার এবং সার্চ */}
            <div className="flex flex-row mx-auto items-center justify-between px-4">
                <div className="flex flex-row items-center text-center w-full lg:w-1/3">
                    <select
                        className="flex h-[48px] w-1/2 md:w-full lg:w-64 rounded-md border border-neutral-400 font-light bg-primary px-4 py-3 text-base outline-none"
                        value={filterQuery}
                        onChange={handleFilter}
                    >
                        <option value="all">আপনার ট্যুর ফিল্টার করুন...</option>
                        <option value="adventure">অ্যাডভেঞ্চার</option>
                        <option value="leisure">বিনোদন</option>
                        <option value="cultural">সাংস্কৃতিক</option>
                    </select>
                </div>

                <div className="flex flex-row-reverse md:flex-row items-center text-center w-full lg:w-1/3 lg:justify-end">
                    <input
                        className="flex h-[48px] w-1/2 md:w-full lg:w-64 rounded-md border border-neutral-400 focus:border-accent font-light bg-primary px-4 py-3 text-base placeholder:text-black/60 outline-none"
                        type="text"
                        placeholder="এখানে খুঁজুন..."
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                    />
                </div>
            </div>

            {/* ডেটা প্রদর্শন */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-5 my-10 rounded-t-md">
                {loading ? (
                    <div className="col-span-full flex justify-center items-center text-lg font-medium text-blue-600">
                        <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500"></div>
                        <span className="ml-4">লোড হচ্ছে...</span>
                    </div>
                ) : filteredPackages.length > 0 ? (
                    filteredPackages.map((pack) => (
                        <AllPackages pack={pack} key={pack.id} />
                    ))
                ) : (
                    <div className="col-span-full text-center text-xl font-semibold text-red-500">
                        কোন তথ্য পাওয়া যায়নি
                    </div>
                )}
            </div>
        </div>
    );
};

export default Packages;
