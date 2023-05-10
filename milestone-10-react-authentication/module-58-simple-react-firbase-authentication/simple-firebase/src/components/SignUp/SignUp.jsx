import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.init";

const SignUp = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleSignUp = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default SignUp;
