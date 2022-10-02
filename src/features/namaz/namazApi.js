import { apiSlice } from "../api/apiSlice";
import { toDay } from "./namazSlice";

export const namazApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNamazs: builder.query({
      query: ({ email, date }) => {
        return `/namaz?email=${email}`;
      },
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          // console.log(result);

          // localStorage.setItem(
          //   "auth",
          //   JSON.stringify({
          //     accessToken: result.data.accessToken,
          //     user: result.data.user,
          //   })
          // );
          // dispatch(
          //   toDay({
          //     accessToken: result.data.accessToken,
          //     user: result.data.user,
          //   })
          // );
        } catch (err) {
          // do nothing
        }
      },
    }),

    getNamaz: builder.query({
      query: ({ email, date }) => {
        return `/namaz?email=${email}&date=${date}`;
      },
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
        } catch (err) {
          // do nothing
        }
      },
    }),

    addNamaz: builder.mutation({
      query: (data) => ({
        url: "/namaz",
        method: "POST",
        body: data,
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          
          dispatch(
            toDay({
              id: result?.data[0]?._id,
              namaz: result.data,
              date: result?.data[0]?.date,
            })
          );
        } catch (err) {
          // do nothing
        }
      },
    }),

    editNamaz: builder.mutation({
      query: ({ id, data }) => ({
        url: `/namaz/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetNamazsQuery,
  useGetNamazQuery,
  useAddNamazMutation,
  useEditNamazMutation,
} = namazApi;
