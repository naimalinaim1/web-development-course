import React, { useState } from "react";
import {
  GithubAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import app from "./firebase/firebase.config";
import "./App.css";

const App = () => {
  // user information state
  const [user, setUser] = useState(null);

  // firebase auth and provider
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  // handle google login
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        const loginUser = res.user;
        setUser(loginUser);
      })
      .catch((e) => console.log(e.message));
  };

  // git hub login
  const handleGitHubLogin = () => {
    signInWithPopup(auth, gitHubProvider)
      .then((res) => setUser(res.user))
      .catch((e) => console.log(e.message));
  };

  // twitter login
  const handleTwitterLogin = () => {
    console.log("twitter login");
  };

  // handle logout sign out
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="App">
      <h2>Firebase practice - login</h2>
      {user ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <>
          <button onClick={handleGoogleLogin}>Google</button>
          <button onClick={handleGitHubLogin}>GitHub</button>
          <button onClick={handleTwitterLogin}>Twitter</button>
        </>
      )}

      {user && (
        <div>
          <h3>{user.displayName}</h3>
          <p>{user.email}</p>
          <img
            src={user.photoURL}
            alt=""
            style={{ width: "55px", height: "55px", borderRadius: "50%" }}
          />
        </div>
      )}
    </div>
  );
};

export default App;
