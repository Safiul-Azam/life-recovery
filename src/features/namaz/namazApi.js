import { apiSlice } from "../api/apiSlice";
import { FilterData, toDay } from "./namazSlice";

export const namazApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNamazs: builder.query({
      query: ({ email, limit, date }) => {
        return `/namaz?email=mdsalmanahamad90@gmail.com`;
      },
      async onQueryStarted({ date }, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          const resData = result?.data;

          let finalData = [];

          // mainData
          date.forEach((d) => {
            // findDate
            resData.find((namaz) => namaz.date === d && finalData.push(namaz));
          });

          console.log(finalData.reverse());

          dispatch(
            FilterData(finalData)
          );
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
          // const result = await queryFulfilled;
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
        method: "PUT",
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
