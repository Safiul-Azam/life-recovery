import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";
import { userLoggedOut } from "../auth/authSlice";

// http://localhost:8800
// https://stormy-temple-90642.herokuapp.com
const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8800/api",
  prepareHeaders: async (headers, { getState, endpoint }) => {
    const token = getState()?.auth?.accessToken;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result?.error?.status === 401) {
      api.dispatch(userLoggedOut());
      localStorage.clear();
      signOut(auth)
    }
    return result;
  },
  tagTypes: [],
  endpoints: (builder) => ({}),
});
