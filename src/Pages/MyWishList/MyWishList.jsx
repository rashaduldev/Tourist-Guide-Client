import useAxiosPublick from "../../Hooks/useAxiosPublick";


const MyWishList = () => {
    const axiosPublic=useAxiosPublick();
    
    axiosPublic.post('/wishlists')
    return (
        <div>
            
        </div>
    );
};

export default MyWishList;