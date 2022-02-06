import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error } = useContext(AuthContext);

  useEffect(() => error && toast.error(error));

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <>
      <div className="mt-20 mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full my-6 py-8  border-2 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900">
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className=" text-center mb-3 font-bold">
                  <h1 className="font-pop text-4xl">Login</h1>
                  <ToastContainer />
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="relative w-full mb-3 ">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="dark:bg-gray-800 border-0 px-3 py-3 placeholder-gray-400 text-gray-600 dark:text-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="dark:bg-gray-800 border-0 px-3 py-3 placeholder-gray-400 text-gray-600 dark:text-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 bg-gradient-to-br from-red-400 to-red-900 text-white active:bg-gray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <a onClick={(e) => e.preventDefault()}>
                  <small>Forgot password?</small>
                </a>
              </div>
              <div className="w-1/2 text-right">
                <small>
                  {" "}
                  Don't have an account?{" "}
                  <Link href="/account/register">
                    <a className="text-red-400">Register</a>
                  </Link>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
