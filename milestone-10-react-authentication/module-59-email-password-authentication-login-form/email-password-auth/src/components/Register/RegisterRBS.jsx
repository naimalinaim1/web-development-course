import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  sendPasswordResetEmail,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import { Link } from "react-router-dom";
const auth = getAuth(app);

const RegisterRBS = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();

  auth.listUsers().then((users) => {
    users.users.forEach((u) => {
      console.log("user", u.toJSON());
    });
  });

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    // clear  state
    setSuccess("");
    setError("");

    // validate
    if (!/(?=.[A-Z])/.test(password)) {
      setError("Please add at least one uppercase");
      return;
    } else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
      setError("Please add at least two number");
      return;
    } else if (password.length < 6) {
      setError("Please add at least 6 characters in you password");
      return;
    }

    // create new user  in fb
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const newUser = res.user;
        emailVerification(newUser);
        setError("");
        e.target.reset();
        setSuccess("User has been created successfully");
        updateUserData(newUser, name);
      })
      .catch((e) => {
        console.error(e.message);
        setError(e.message);
      });
  };

  const updateUserData = (user, name) => {
    updateProfile(user, { displayName: name })
      .then(() => {
        console.log("user name update");
      })
      .catch((e) => {
        setError(e.message);
      });
  };

  const emailVerification = (user) => {
    sendEmailVerification(user)
      .then((res) => {
        alert("please verify email");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleReset = () => {
    const email = emailRef.current.value;
    if (!email) {
      alert("Please provide you email address to reset password");
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Please check your email");
      })
      .catch((e) => {
        console.log(e.message);
        setError(e.message);
      });
  };

  const showPassword = () => {
    passwordRef.current.type = "text";
  };

  return (
    <div className="w-50 mx-auto">
      <h3 className="text-primary text-center mb-2">Please Register</h3>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter Name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            ref={emailRef}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
            ref={passwordRef}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Accept terms and conditions" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="showPassword">
          <Form.Check
            onChange={showPassword}
            type="checkbox"
            label="Show password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p>
        <small>
          Forget password?{" "}
          <button className="btn btn-link" onClick={handleReset}>
            Reset password
          </button>
        </small>
      </p>
      <p>
        <small>
          Already have an account? Please &nbsp;
          <Link to="/login">login</Link>
        </small>
      </p>
      <p className="text-danger">{error}</p>
      <p className="text-success">{success}</p>
    </div>
  );
};

export default RegisterRBS;
