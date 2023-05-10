import React, { useState } from "react";
import app from "../../firebase/firebase.config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

const auth = getAuth(app);

const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // clear state
    setError("");
    setSuccess("");

    // sing in user
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        setError("");
        setSuccess("login successful");
      })
      .catch((e) => {
        setError(e.message);
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">Login</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control mb-3"
                    id="email"
                    name="email"
                    placeholder="Enter email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control mb-3"
                    id="password"
                    name="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Login
                </button>
              </form>
              <p>
                <small>
                  New to this website? Please &nbsp;
                  <Link to="/register-rbs">Register</Link>
                </small>
              </p>
              <p className="text-danger">{error}</p>
              <p className="text-success">{success}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
