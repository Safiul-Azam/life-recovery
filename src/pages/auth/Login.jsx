import React, { useEffect } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../Assets/life-recovery.png";
import SocialLogin from "./SocialLogin";
import Loading from "../../components/Shared/Loading";
import { useLoginMutation } from "../../features/auth/authApi";

const Login = () => {
  const navigate = useNavigate();
  let location = useLocation();

  const [login, { data, isSuccess, isLoading, error: responseError }] =
    useLoginMutation();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    // if (responseError?.data) {
    //   console.log(responseError?.data);
    // }

    if (user) {
      navigate(from, { replace: true });
    }
  }, [data, responseError, user, navigate, from]);

  if (isLoading || loading) {
    return <Loading />;
  }

  if (user && isSuccess) {
    // navigate("/");
    console.log("Login Success");
  }

  let errorMessage;
  if (error) {
    errorMessage = <p className="text-red-400">{error.message}</p>;
  }

  const onSubmit = async (data) => {
    const { email, password } = data;
    // await login({ email, password });
    await signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="lg:w-1/3 md:w-1/2 w-full mx-auto border rounded-xl p-10 shadow-inner my-16">
      <img src={logo} className="bg-green-500 w-20 mx-auto mb-2" alt="" />
      <h2 className="text-2xl text-green-700 font-bold text-center mb-4 uppercase">
        Log In
      </h2>
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full">
          {/* <label className="label">
                        <span className="label-text">Email</span>
                    </label> */}
          <fieldset className="border border-solid px-3 text-gray-600 border-gray-300">
            <legend className="text-lg">Email</legend>
            <input
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Provide a valid email",
                },
              })}
              type="email"
              placeholder="Enter Your Email"
              className="input border-none focus:border-none  outline-0 focus:outline-none w-full rounded-none"
            />
          </fieldset>
          <label className="label">
            {errors.email?.type === "required" && (
              <span className="label-text-alt text-error">
                {errors.email.message}
              </span>
            )}
            {errors.email?.type === "pattern" && (
              <span className="label-text-alt text-error">
                {errors.email.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full ">
          {/* <label className="label">
                        <span className="label-text">Password</span>
                    </label> */}
          <fieldset className="border border-solid px-3 text-gray-600 border-gray-300">
            <legend className="text-lg">Password</legend>
            <input
              {...register("password", {
                required: {
                  value: true,
                  message: "password is required",
                },
                minLength: {
                  value: 6,
                  message: "The password must be at least 6 characters long",
                },
              })}
              type="password"
              placeholder="Enter Your Password"
              className="input border-none focus:border-none  outline-0 focus:outline-none w-full rounded-none"
            />
          </fieldset>
          <label className="label">
            {errors.password?.type === "required" && (
              <span className="label-text-alt text-error">
                {errors.password.message}
              </span>
            )}
            {errors.password?.type === "pattern" && (
              <span className="label-text-alt text-error">
                {errors.password.message}
              </span>
            )}
          </label>
        </div>
        {errorMessage}
        <input
          className="w-full btn bg-green-300 border-none text-green-800 text-lg"
          type="submit"
          value="sign up"
        />
        <p className="mt-6 text-sm">
          New to Life-Recovery?{" "}
          <Link className="text-primary" to="/signUp">
            please sign up
          </Link>
        </p>
      </form>
      <SocialLogin />
    </div>
  );
};

export default Login;
