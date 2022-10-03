import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLoggedIn } from "../features/auth/authSlice";
import { useAddNamazMutation } from "../features/namaz/namazApi";
import { dateFormat } from "../utils/dateFormat";

const useAuthCheck = () => {
  const dispatch = useDispatch();

  const date = useSelector((state) => state.namaz.date);
  const [addNamaz, { data, error }] = useAddNamazMutation();
  const [authLoading, setAuthLoading] = useState(true);
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (data) {
      console.log("useAuthCheck - addNamaz data:", data);
    }

    if (error) {
      console.log("useAuthCheck - addNamaz error:", error);
    }
  }, [data, error]);

  useEffect(() => {
    const localAuth = localStorage?.getItem("auth");

    if (localAuth) {
      const auth = JSON.parse(localAuth);

      if (auth?.accessToken && auth?.user) {
        setEmail(auth?.user?.email);

        dispatch(
          userLoggedIn({
            accessToken: auth.accessToken,
            user: auth.user,
          })
        );
      }
    }
    setAuthLoading(false);
  }, [dispatch]);

  useEffect(() => {
    const formattedDate = dateFormat(date);
    if (email) {
      addNamaz({
        email: email,
        date: formattedDate,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email]);

  return authLoading;
};

export default useAuthCheck;
