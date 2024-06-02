import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/authentication2.png";
import ExtraLogin from "../../Components/ExtraLogin";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const Navigate = useNavigate();
  const Location = useLocation();

  const from = Location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(password, email);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        let timerInterval;
        Swal.fire({
          title: "Login Successfully!",
          html: "I will close in <b></b> milliseconds.",
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
              timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
          }
        });
        Navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log("email or password not match");
        console.log(err.message);
      });
  };
  return (
    <div>
      <Helmet>
        <title>Tourist </title>
      </Helmet>

      <div className="min-h-screen w-full my-10">
        <div className="flex flex-col lg:flex-row justify-center ">
          <div className="text-center flex-1  max-w-lg lg:text-left mx-auto">
            <h1 className="text-5xl text-black font-bold text-center mb-9">Login now!</h1>
            <img src={img} alt="" />
          </div>
          <div className="max-w-md flex-1  p-10 border bg-base-300 mx-auto">
            {/* <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <button  className="btn btn-primary">
                  Login
                </button>
              </div>
            </form> */}
            {/* <!-- Form --> */}
            <form onSubmit={handleLogin}>
              <div className="grid gap-y-4">
                {/* <!-- Form Group --> */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm mb-2 dark:text-white font-bold text-black/60"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="email"
                      className="flex h-[48px] w-full rounded-md border border-neutral-400 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-black/60 outline-none"
                      required
                      aria-describedby="email-error"
                    />
                    <div className="hidden absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                      <svg
                        className="h-5 w-5 text-red-500"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                  <p
                    className="hidden text-xs text-red-600 mt-2"
                    id="email-error"
                  >
                    Please include a valid email address so we can get back to
                    you
                  </p>
                </div>
                {/* <!-- End Form Group --> */}

                {/* <!-- Form Group --> */}
                <div>
                  <div className="flex justify-between items-center">
                    <label
                      htmlFor="password"
                      className="block text-sm mb-2 dark:text-white font-bold text-black/60"
                    >
                      Password
                    </label>
                    <a
                      className="text-sm text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      href="../examples/html/recover-account.html"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div className="relative">
                    <input
                      type={!showPassword ? "password" : "text"}
                      id="password"
                      name="password"
                      placeholder="password"
                      className="flex h-[48px] w-full rounded-md border border-neutral-400 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-black/60 outline-none"
                      required
                      aria-describedby="password-error"
                    />
                    <div
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute top-[10px] right-3"
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
                    <div className="hidden absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                      <svg
                        className="h-5 w-5 text-red-500"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                  <p
                    className="hidden text-xs text-red-600 mt-2"
                    id="password-error"
                  >
                    8+ characters required
                  </p>
                </div>
                {/* <!-- End Form Group --> */}

                <button
                  type="submit"
                  className="w-full mt-5 py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                >
                  Log in
                </button>
              </div>
            </form>
            {/* <!-- End Form --> */}
            <p className="text-center italic mt-7">
              New hare ?{" "}
              <a className="text-blue-400 underline" href="signup">
                Please signup
              </a>{" "}
            </p>
            <ExtraLogin></ExtraLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
