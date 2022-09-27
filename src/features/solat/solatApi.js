import { apiSlice } from "../api/apiSlice";

export const hotelsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSolat: builder.query({
      query: () => `/hotels`,
    }),
    getHotel: builder.query({
      query: (id) => `/hotels/find/${id}`,
    }),

    addHotel: builder.mutation({
      query: ({ sender, data }) => ({
        url: "/hotels",
        method: "POST",
        body: data,
      }),
    }),
    editHotel: builder.mutation({
      query: ({ id, data, sender }) => ({
        url: `/hotels/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetHotelsQuery,
  useGetHotelQuery,
  useAddHotelMutation,
  useEditHotelMutation,
} = hotelsApi;
