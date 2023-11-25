import { Outlet } from "react-router-dom";
import Navber from "../Pages/Navber/Navber";
import Footer from "../Pages/Footer/Footer";


const Root = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;