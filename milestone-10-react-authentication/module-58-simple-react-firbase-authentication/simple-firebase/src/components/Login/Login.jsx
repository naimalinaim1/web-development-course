import React, { useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.init";

const Login = () => {
  const [user, setUser] = useState(null);

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      {user ? (
        <button onClick={handleLogOut}>Log out</button>
      ) : (
        <>
          <button onClick={handleGoogleSignIn}>Google login</button>
          <button onClick={handleGithubSignIn}>Github login</button>
        </>
      )}

      {user && (
        <div style={{ textAlign: "center" }}>
          <h3>User: {user?.displayName}</h3>
          <p>Email: {user?.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
