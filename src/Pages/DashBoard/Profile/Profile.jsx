
import { useContext } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { PiGenderFemaleFill } from "react-icons/pi";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { RiContactsFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";

const Profile = () => {
    const {user}=useContext(AuthContext);
    console.log(user);
    const handleclick = () => {
        Swal.fire({
            title: "<p>To Verify, You’ve to pay the amount of<u> $25</u></p>",
            icon: "info",
            html: `
                <div class='flex gap-5 items-center'>
                    <div class="bg-[#CABDFF] w-3 h-8 rounded-lg"></div>
                    <div>
                        <p class="font-bold text-lg">General information</p>
                    </div>
                </div>
            `,
            showCloseButton: true,
            showCancelButton: false,
            focusConfirm: false,
            confirmButtonText: `
                <i class="fa fa-thumbs-up"></i> Proceed to pay
            `,
            confirmButtonAriaLabel: "Thumbs up, great!",
            cancelButtonAriaLabel: "Thumbs down"
        });
    };
    
    return (
        <div className='relative'>
            <div className='h-28 w-full'>   <img
            src="https://i.ibb.co/HP28p9X/Cover-photo.png"
            alt="Profile Image"
            className="w-full "
            />
            </div>
          <div className="lg:w-[90%] mx-auto absolute top-[90%] px-5 lg:left-20">
             <div className="">
           <div className='p-10 bg-white rounded-md -bottom-30 w-full shadow-xl'>
            <div className='flex justify-between '>
                    <div className='flex gap-5'>
                        <div>
                        <img
                src={user.photoURL}
                alt="Profile Image"
                className="rounded-full h-10 w-10"
                />  
                        </div>
                        <div>
                            <div className='flex items-center lg:gap-2'>
                            <h1 className='lg:text-3xl font-bold'>{user.displayName}</h1>
                            <RiVerifiedBadgeFill className='text-2xl text-[#22CD5A]' />
                            </div>
                            <p>Dream big. Think different. Do great!</p>
                        </div>
                    </div>
                    <div>
                       <Link to={'/dashboard/edituser'}>
                       <button className='py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none'>Edit Profile</button>
                       </Link>
                    </div>
                    
                </div>
                <hr className='my-10' />
                    <button className='btn'>Basic Info</button>
            </div>
             </div>
             <div className="py-8">
           <div className='p-10 bg-white rounded-md -bottom-30 w-full shadow-xl'>
           <div className='flex gap-5 items-center'>
                        <div className="bg-[#CABDFF] w-3 h-8 rounded-lg"> 
                        </div>
                        <div>
                            <p className="font-bold text-lg">General information</p>
                        </div>
                    </div>
            <div className='flex flex-col lg:flex-row justify-between mt-10'>
 
                    <div className="mt-9">
                        <div className="flex items-center gap-3">
                            <p className="text-[#2F7889] text-xl"><RiContactsFill /></p>
                            <p className="font-bold">Nickname: <b>{user?.displayName}</b></p>
                        </div>
                        <div className="flex items-center gap-3 my-3">
                            <p className="text-[#2F7889] text-xl"><PiGenderFemaleFill /></p>
                            <p className="font-bold">Gender: <b>Male</b></p>
                        </div>
                        <div className="flex items-center gap-3">
                            <p className="text-[#2F7889] text-xl"><MdEmail /></p>
                            <p className="font-bold">Email address: <b>{user?.email}</b></p>
                        </div>
                        <div className="flex items-center gap-3 my-3">
                            <p className="text-[#2F7889] text-xl"><IoLocationSharp /></p>
                            <p className="font-bold">Location: <b>Dhaka, Bangladesh</b></p>
                        </div>
                        <div className="flex items-center gap-3">
                            <p className="text-[#2F7889] text-xl"><RiContactsFill /></p>
                            <p className="font-bold">Contact number : <b>{
                                user? user.phoneNumber:
                                "...."
                                }</b>....</p>
                        </div>
                    </div>
                    <div className="text-center">
                    <RiVerifiedBadgeFill className='text-9xl text-[#22CD5A] mx-auto' />
                    <button onClick={handleclick} className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-500 text-white hover:bg-gray-600 disabled:opacity-50 disabled:pointer-events-none">Apply for verification</button>
                    <p className="py-5">If you verify, There is a huge chance of <br /> investor who’ll love to invest in your pitch</p>
                    </div>
                    
                </div>
            </div>
             </div>
          </div>
        </div>
    );
};

export default Profile;