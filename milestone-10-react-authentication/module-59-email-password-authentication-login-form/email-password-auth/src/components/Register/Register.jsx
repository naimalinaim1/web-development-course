import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userEmail = e.target.email.value;
    const userPassword = e.target.password.value;
    console.log(userEmail, userPassword);
  };

  const handleEmailChange = (e) => {
    const userEmail = e.target.value;
    setEmail(userEmail);
    console.log(userEmail);
  };

  const handlePasswordBlue = (e) => {
    const userPassword = e.target.value;
    setPassword(userPassword);
    console.log(userPassword);
  };

  return (
    <div>
      <h2>PLease Register</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <input
            onChange={handleEmailChange}
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
          />
        </p>
        <p>
          <input
            onBlur={handlePasswordBlue}
            type="password"
            name="password"
            id="password"
            placeholder="Your Password"
          />
        </p>
        <p>
          <input type="submit" value="Register" />
        </p>
      </form>
    </div>
  );
};

export default Register;
