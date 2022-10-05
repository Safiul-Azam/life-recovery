import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import { userLoggedIn } from "../features/auth/authSlice";
import { useAddNamazMutation } from "../features/namaz/namazApi";
import auth from "../firebase.init";
import { dateFormat } from "../utils/dateFormat";

const useAuthCheck = () => {
  const [user, loading] = useAuthState(auth);

  const date = useSelector((state) => state.namaz.date);
  const [addNamaz, { data, error }] = useAddNamazMutation();
  const [authLoading, setAuthLoading] = useState(loading);
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (data) {
      console.log("useAuthCheck - addNamaz data:", data);
    }

    if (error) {
      console.log("useAuthCheck - addNamaz error:", error);
    }
  }, [data, error]);

  // useEffect(() => {
  //   const localAuth = localStorage?.getItem("auth");

  //   if (user) {
  //     const auth = JSON.parse(localAuth);

  //     if (auth?.accessToken && auth?.user) {
  //       setEmail(auth?.user?.email);

  //       dispatch(
  //         userLoggedIn({
  //           accessToken: auth.accessToken,
  //           user: auth.user,
  //         })
  //       );
  //     }
  //   }
  //   setAuthLoading(false);
  // }, [dispatch]);

  useEffect(() => {
    const formattedDate = dateFormat(date);
    if (user) {
      addNamaz({
        email: user?.email,
        date: formattedDate,
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return authLoading;
};

export default useAuthCheck;
