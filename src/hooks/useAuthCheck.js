import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLoggedIn } from "../features/auth/authSlice";
import { useAddNamazMutation } from "../features/namaz/namazApi";
import { toDay } from "../features/namaz/namazSlice";
import { dateFormat } from "../utils/dateFormat";

const useAuthCheck = () => {
  const dispatch = useDispatch();

  const date = useSelector((state) => state.namaz.date);
  const [authLoading, setAuthLoading] = useState(true);
  const [addNamaz, { data, isSuccess, isLoading, error: responseError }] =
    useAddNamazMutation();

    const today = {
      day: new Date().getDate(),
      month: new Date().getMonth() + 1,
      year: new Date().getFullYear(),
    };

  useEffect( () => {
    const localAuth = localStorage?.getItem("auth");

    if (localAuth) {
      const auth = JSON.parse(localAuth);

      if (auth?.accessToken && auth?.user) {
       

        // if (!isLoading && data?.length !== 0) {
        //   // console.log(data?.length !== 0, data)
        //   dispatch(toDay({ date: date, namaz: data }));
        // }

        const formattedDate = dateFormat(date);
        console.log(formattedDate);
        addNamaz({
          email: auth?.user?.email,
          date: formattedDate,
        });


        dispatch(
          userLoggedIn({
            accessToken: auth.accessToken,
            user: auth.user,
          })
        );
      }
    }
    setAuthLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return authLoading;
};

export default useAuthCheck;
