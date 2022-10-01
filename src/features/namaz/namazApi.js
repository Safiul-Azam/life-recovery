import { apiSlice } from "../api/apiSlice";

export const namazApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNamazs: builder.query({
      query: ({ email, date }) => `/namaz?email=${email}&date=${date}`,
    }),

    getNamaz: builder.query({
      query: (id) => `/namaz/find/${id}`,
    }),

    addNamaz: builder.mutation({
      query: ({ data }) => ({
        url: "/namaz",
        method: "POST",
        body: data,
      }),
      
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
