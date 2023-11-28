import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";



const Dash = () => {
    const {user}=useContext(AuthContext);
    console.log(user);
    return (
        <div>
            <h1 className="text-4xl ml-10 mt-10">Welcome to Mr, <p className="font-bold">{user.displayName}</p></h1>
        </div>
    );
};

export default Dash;