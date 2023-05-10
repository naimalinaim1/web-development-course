import React, { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { loginUser, verifyEmail } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.floating_email.value;
    const password = form.floating_password.value;

    loginUser(email, password)
      .then((res) => {
        const user = res.user;
        if (user.emailVerified) {
          navigate("/home");
        } else {
          setError("Email not verify. please check email and verify and login");
          verifyEmail(user)
            .then()
            .catch((e) => setError(e.message));
        }
      })
      .catch((e) => {
        setError(e.message);
      });
  };

  return (
    <div className="h-screen flex items-center bg-sky-100/50">
      <div className="w-[50%] max-w-[600px] mx-auto">
        <h2 className="text-3xl font-semibold text-center">App Login</h2>
        <form onSubmit={handleLogin} className="border-2  p-4 rounded-md mt-10">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="password"
              name="floating_password"
              id="floating_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>
          <div>
            <p className="text-gray-500">
              New user go to{" "}
              <Link className="text-blue-500" to="/register">
                Register
              </Link>
            </p>
          </div>
          <p className="text-red-500 mb-6">{error}</p>
          <input
            type="submit"
            className="text-white cursor-pointer  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            value="Login"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
