import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import useAxiosPublick from "../Pages/Hooks/useAxiosPublick";
import useAuth from "../Pages/Hooks/useAuth";

const ExtraLogin = () => {
    const {googleSignin}=useAuth();
    const navigate=useNavigate();
    const Location=useLocation();
    const from=Location.state?.from?.pathname || "/";
    console.log("pathname: ", Location.state);
    const axiosPublic=useAxiosPublick();

    const handleGoogleSignin =()=>{
        googleSignin()
        .then(res=>{
            console.log(res);
            const userInfo={
              email:res.user?.email,
              name:res.user?.displayName
            }
            axiosPublic.post('/users',userInfo)
            .then(res=>{
              console.log(res.data);
            });
            // reset();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Login Successfully",
            showConfirmButton: false,
            timer: 1500
          });
          navigate(from,{replace:true});
        })
    }
  return (
    <div className="px-4 flex gap-3 mb-3 mx-auto text-center">
      <button 
      onClick={handleGoogleSignin}
      className="btn">
        <FaGoogle></FaGoogle>
        Google
      </button>
      <button 
      onClick={handleGoogleSignin}
      className="btn">
        <FaFacebook></FaFacebook>
        Facebook
      </button>
      <button 
      onClick={handleGoogleSignin}
      className="btn">
        <FaGithub></FaGithub>
        Github
      </button>
    </div>
  );
};

export default ExtraLogin;
