import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import FirebaseContext from "../context/firebase";
import * as ROUTES from "../constants/routes";

function Login() {
  const navigate = useNavigate();
  const { firebase } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const isInvalid = password === "" || emailAddress === "";

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      await firebase.auth().signInWithEmailAndPassword(emailAddress, password);
      navigate(ROUTES.DASHBOARD);
    } catch (error) {
      setEmailAddress("");
      setPassword("");
      setError(
        "There is no user record corresponding to this identifier. The user may have been deleted."
      );
    }
  };

  return (
    <div className="container flex mx-auto max-w-sm items-center h-screen">
      <div className="flex flex-col mx-auto">
        <div className="flex flex-col items-center bg-white p-4 border border-gray-300 mb-4 rounded">
          <h1 className="flex justify-center w-full"></h1>
          {error && <p className="mb-4 text-xs text-red-500">{error}</p>}

          <form onSubmit={handleLogin} method="POST">
            <input
              aria-label="Enter your email adress"
              type="text"
              placeholder="Email address"
              className="text-sm text-gray-800 w-full mr-3 py-5 px-4 h-2 border border-gray-300 rounded mb-2"
              onChange={({ target }) => setEmailAddress(target.value)}
              value={emailAddress}
            />
            <input
              aria-label="Enter your password"
              type="password"
              placeholder="Password"
              className="text-sm text-gray-800 w-full mr-3 py-5 px-4 h-2 border border-gray-300 rounded mb-2"
              onChange={({ target }) => setPassword(target.value)}
              value={password}
            />
            <button
              disabled={isInvalid}
              type="submit"
              className={`bg-bluish text-white w-full rounded h-8 font-bold
              ${isInvalid && "opacity-50"}`}
            >
              Log In
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center flex-col w-full bg-white p-4 rounded border border-gray-300">
          <p className="text-sm">
            Don't have an account?{" "}
            <Link to={ROUTES.SIGN_UP} className="font-bold text-bluish">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
