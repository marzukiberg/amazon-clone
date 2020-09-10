import React, { useState } from "react";
import "./Login.css";
import { Helmet } from "react-helmet";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";
import { CircularProgress } from "@material-ui/core";

const Login = () => {
  const history = useHistory();
  const [progress, setProgress] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    // prevent from refreshing
    e.preventDefault();

    // do some fancy firebase login
    setProgress("logging in...");
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        setProgress(null);
        history.push("/");
      })
      .catch((err) => {
        setProgress(null);
        alert(err.message);
      });
  };

  const register = (e) => {
    e.preventDefault();

    // do some fancy firebase register
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully created a new user and password
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <Helmet title="Login | Amazon Clone" />

      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/800px-Amazon_logo.svg.png"
          alt="Amazon Logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign In</h1>

        <form action="">
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            {progress === null ? (
              "Sign In"
            ) : (
              <CircularProgress style={{ color: "black" }} size={22} />
            )}
          </button>
        </form>

        <p>
          By signing-in you agree to AMAZON FAKE CLONE Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button onClick={register} className="login__registerButton">
          Create your Amazon Fake account
        </button>
      </div>
    </div>
  );
};

export default Login;
