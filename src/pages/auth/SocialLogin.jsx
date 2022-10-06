import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../components/Shared/Loading";
import {
  useLoginMutation,
  useRegistrationMutation,
} from "../../features/auth/authApi";
import auth from "../../firebase.init";

const SocialLogin = ({ signUp }) => {
  const navigate = useNavigate();
  let location = useLocation();

  const [registration, { data, isLoading, error: responseError }] =
    useRegistrationMutation();

  const [
    login,
    { data: loginData, isLoading: loginLoading, error: loginError },
  ] = useLoginMutation();

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (responseError?.data || loginError?.data) {
      console.log(responseError?.data || loginError?.data);
    }
    if (
      (loginData?.accessToken && loginData?.user) ||
      (data?.accessToken && data?.user)
    ) {
      navigate(from, { replace: true });
    }
  }, [loginData, loginError, data, responseError, navigate, from]);

  useEffect(() => {
    if (user) {
      // navigate("/");
      const { displayName, email, photoURL } = user?.user || {};
      
      const password = "social-login";
      if (signUp) {
        registration({
          username: displayName,
          email,
          password,
          img: photoURL,
        });
      } else {
        login({ email, password });
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  let errorMessage;
  if (error) {
    errorMessage = <p className="text-red-400">{error.message}</p>;
  }

  if (loginLoading || isLoading || loading) {
    return <Loading />;
  }

  const handleSignIn = async () => {
    await signInWithGoogle();
    // await
  };

  return (
    <div className="flex flex-col w-full border-opacity-50">
      <div className="divider">OR</div>
      {errorMessage}
      <button
        onClick={() => handleSignIn()}
        className="btn btn-primary text-white tracking-widest w-full "
      >
        Google Sign In
      </button>
    </div>
  );
};

export default SocialLogin;
