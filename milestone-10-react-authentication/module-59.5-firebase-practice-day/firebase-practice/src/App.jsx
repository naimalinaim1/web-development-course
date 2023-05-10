import React, { useRef, useState } from "react";
import "./App.css";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "./firebase.config";

const App = () => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [user, setUser] = useState(null);

  const nameFiled = useRef();
  const emailFiled = useRef();
  const passwordFiled = useRef();

  // handle register
  const handleRegister = (e) => {
    e.preventDefault();
    const name = nameFiled.current.value;
    const email = emailFiled.current.value;
    const password = passwordFiled.current.value;

    // clear state
    setError("");
    setSuccess("");

    // create a new user
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const user = res.user;
        setError("");

        // set display name
        updateProfile(user, { displayName: name })
          .then(() => {
            sendEmailVerification(user)
              .then(() => {
                console.log(user);
                setSuccess("Register successful");
                setUser(user);
                if (!user.emailVerified) {
                  setError("please email verify. check your email");
                }
              })
              .catch((e) => {
                setError(e.message);
              });
          })
          .catch((e) => setError(e.message));
      })
      .catch((e) => {
        setSuccess("");
        setError(e.message);
      });
  };

  // google register
  const handleGoogleRegister = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        const user = res.user;
        console.log(user);
        setUser(user);
        setSuccess("Register successful");
        setError("");
      })
      .catch((e) => {
        setSuccess("");
        setError(e.message);
      });
  };

  // git hub register
  const handleGitHubRegister = () => {
    const githubProvider = new GithubAuthProvider();
    signInWithPopup(auth, githubProvider)
      .then((res) => {
        const user = res.user;
        setUser(user);
        setSuccess("Register successful");
        setError("");
      })
      .catch((e) => {
        setSuccess("");
        setError(e.message);
      });
  };

  // handle sign out
  const handleSignOut = () => {
    signOut(auth).then(() => {
      setUser(null);
    });
  };

  return (
    <div>
      <div className="register">
        <h3>Register</h3>
        <form onSubmit={handleRegister}>
          <p>
            <input
              ref={nameFiled}
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
              required
            />
          </p>
          <p>
            <input
              ref={emailFiled}
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
              required
            />
          </p>
          <p>
            <input
              ref={passwordFiled}
              type="password"
              name="password"
              id="password"
              placeholder="Your password"
              required
            />
          </p>
          <p>
            <input type="submit" value="Register" />
          </p>
        </form>
        <div className="button-container">
          <button onClick={handleGoogleRegister}>Google</button>
          <button onClick={handleGitHubRegister}>Github</button>
        </div>
        <p style={{ color: "red" }}>{error}</p>
        <p style={{ color: "green" }}>{success}</p>
      </div>
      {user && (
        <div className="user-info">
          <div>
            <h3>{user.displayName}</h3>
            <p>{user.email}</p>
            <p>
              <small>{user.emailVerified ? "verify" : "no verify"}</small>
            </p>
          </div>
          <button onClick={handleSignOut}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default App;
