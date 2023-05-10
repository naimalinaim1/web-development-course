import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);

  // handle login
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // signIN user
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        form.reset();
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="hero min-h-[calc(100vh-80px)] bg-base-200">
      <div className="hero-content flex-col md:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Please Login !</h1>
        </div>
        <div className="card flex-shrink-0 w-[450px] shadow-2xl bg-base-100">
          {/* login form */}
          <form onSubmit={handleLogin} className="p-5 sm:card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
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
            <div className="form-control mt-6">
              <input type="submit" className="btn btn-primary" value="Login" />
            </div>
          </form>
          <Link to="/register" className="btn btn-link text-[13px]">
            New to Auth Master? Please Register
          </Link>
          <div className="text-center mb-2">
            <button onClick={handleGoogleLogin} className="btn btn-primary">
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
