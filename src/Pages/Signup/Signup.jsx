import { useState } from "react";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import img from "../../assets/authentication2.png";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
// import useAxiosPublick from "../../Hooks/useAxiosPublick";
import ExtraLogin from "../../Components/ExtraLogin";
import useAuth from "../../Hooks/useAuth";
// import useAxiosPublick from "../../Hooks/useAxiosPublick";
import useAxiosPublick from "../../Hooks/useAxiosPublick";

const Signup = () => {
  const { createUser, updateUserProfile } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublick();
  const {
    register,
    handleSubmit,
    // watch,
    // reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const email = data.email;
    const password = data.password;
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        const name = data.name;
        const photo = data.photoURL;
        updateUserProfile(name, photo);

        // create user and send to database
        const userInfo = {
          name,
          email,
        };
        axiosPublic.post('/users',userInfo)
          .then((res) =>{
            console.log('User profile updated');
            if (res.data) {
              console.log('user added to the database');
              // reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User Created Successfully",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/');
            }
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <Helmet>
        <title>Tourist | Signup</title>
      </Helmet>
      <div className="mt-10">
        <div className="flex flex-col lg:flex-row-reverse gap-10">
          <div className="text-center lg:text-center">
            <h1 className="text-5xl font-bold mb-9">Signup Here</h1>
            <img src={img} alt="" />
          </div>
          <div className=" w-full max-w-lg shadow-2xl bg-base-300 rounded pt-8 p-4">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="grid grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    id="email"
                    name="name"
                    {...register("name", { required: true })}
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    aria-describedby="email-error"
                  />
                  {errors.name && (
                    <span className="text-red-600 mt-2">
                      Name is required !
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo Url</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Photo Url"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    name="name"
                    {...register("photourl", { required: true })}
                  />
                  {errors.photourl && (
                    <span className="text-red-600 mt-2">
                      photourl is required !
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    name="email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-red-600 mt-2">
                      Email is required !
                    </span>
                  )}
                </div>
                <div className="form-control relative">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type={!showPassword ? "password" : "text"}
                    name="password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 99,
                      // eslint-disable-next-line no-useless-escape
                      pattern:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
                    })}
                    placeholder="password"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-red-600 mt-2">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-600 mt-2">
                      Please minimum enter 6 charecter
                    </p>
                  )}
                  {errors.password?.type === "max" && (
                    <p className="text-red-600">
                      Please maximum enter 20 charecter
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-600">
                      Please enter at least a symbol, upper and lower case
                      letters and a number
                    </p>
                  )}
                  <div
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-[37px] right-3"
                  >
                    {showPassword ? (
                      <button>
                        {" "}
                        <FaEye></FaEye>
                      </button>
                    ) : (
                      <button>
                        <FaEyeSlash></FaEyeSlash>
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <div className="form-control">
                <button
                  type="submit"
                  value={"Sign up"}
                  className="w-full py-3 px-4 my-7 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  SignUp
                </button>
              </div>
            </form>
            <p className="text-center">
              Already Have an Account ?{" "}
              <a className="text-red-600 underline" href="login">
                Please Login
              </a>{" "}
            </p>
            <div className="divider"></div>
            <ExtraLogin></ExtraLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
