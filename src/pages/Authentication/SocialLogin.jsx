import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const navigate = useNavigate();

  if (user) {
    navigate("/");
  }

  let errorMessage;
  if (error) {
    errorMessage = <p className="text-red-400">{error.message}</p>;
  }

  if (loading) {
    return (
      <p className="text-green-600 text-xl text-center mt-20">Loading...</p>
    );
  }

  return (
    <div className="flex flex-col w-full border-opacity-50">
      <div className="divider">OR</div>
      {errorMessage}
      <button
        onClick={() => signInWithGoogle()}
        className="btn btn-primary text-white tracking-widest w-full "
      >
        Google Sign In
      </button>
    </div>
  );
};

export default SocialLogin;
