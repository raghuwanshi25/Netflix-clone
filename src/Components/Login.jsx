import React from "react";
import Header from "./Header";
import { useState, useRef } from "react";
import { checkData } from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL } from "../utils/constants";

const Login = () => {
  const [signIn, setSignIn] = useState(true);
  const addAsset = () => {
    setSignIn(!signIn);
  };
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const [errorMsg, setErrorMsg] = useState(null);

  const dispatch = useDispatch();

  const handleClick = () => {
    const message = checkData(email.current.value, password.current.value);
    setErrorMsg(message);
    if (message) return;

    if (signIn === false) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              const { email, uid, displayName } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrorMsg(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " " + errorMessage);
        });
    }
  };
  return (
    <div className="w-full">
      <Header />
      <div className="absolute">
        <img
          className="h-screen w-screen bg-cover"
          alt="background"
          src={BG_URL}
        />
      </div>

      <form
        className="w-3/12  left-0 right-0 mx-auto mt-36 p-8 rounded-sm absolute text-white bg-black bg-opacity-[80%]"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl my-4">
          {signIn ? "SignIn" : "SignUp"}
        </h1>
        {signIn ? null : (
          <input
            ref={name}
            className="w-full p-3 my-4 rounded-md bg-gray-800 border border-white opacity-[70%]"
            placeholder="Full Name"
            type="text"
          />
        )}
        <input
          ref={email}
          className="w-full p-3 my-4 rounded-md bg-gray-800 border border-white opacity-[70%]"
          placeholder="Email Address"
          type="text"
        />
        <input
          ref={password}
          className="w-full p-3 my-4 rounded-md bg-gray-800 border border-white opacity-[70%]"
          placeholder="Password"
          type="password"
        />
        {/* Error message  */ <p className="text-red-700">{errorMsg}</p>}
        <button
          className="bg-red-700 text-white text-base w-full py-2 my-4 rounded-md hover:bg-red-600"
          onClick={handleClick}
        >
          {signIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="my-4 text-base cursor-pointer" onClick={addAsset}>
          {signIn
            ? "New to Netflix? Sign up now."
            : "Already registered? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
