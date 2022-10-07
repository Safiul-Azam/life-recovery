import { apiSlice } from "../api/apiSlice";
import { fullGraph } from "../filter/filterSlice";
import { filterData, toDay } from "./namazSlice";

export const namazApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNamazs: builder.query({
      query: ({ email, limit, date }) => {
        return `/namaz?email=${email}`;
      },
      async onQueryStarted({ date }, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          const resData = result?.data;

          let finalData = [];

          // mainData
          date.forEach((d) => {
            // findDate
            resData.find(
              (namaz) =>
                namaz.date === d &&
                finalData.push({
                  day: d.slice(0, 2),
                  Namaz:
                    0 +
                    (namaz.fajr.complete === true ? 1 : 0) +
                    (namaz.dhuhr.complete === true ? 1 : 0) +
                    (namaz.asr.complete === true ? 1 : 0) +
                    (namaz.maghrib.complete === true ? 1 : 0) +
                    (namaz.isha.complete === true ? 1 : 0),
                  Jamat:
                    0 +
                    (namaz.fajr.jamaat === true ? 1 : 0) +
                    (namaz.dhuhr.jamaat === true ? 1 : 0) +
                    (namaz.asr.jamaat === true ? 1 : 0) +
                    (namaz.maghrib.jamaat === true ? 1 : 0) +
                    (namaz.isha.jamaat === true ? 1 : 0),
                  Takbire_Ula:
                    0 +
                    (namaz.fajr.takbir_e_ula === true ? 1 : 0) +
                    (namaz.dhuhr.takbir_e_ula === true ? 1 : 0) +
                    (namaz.asr.takbir_e_ula === true ? 1 : 0) +
                    (namaz.maghrib.takbir_e_ula === true ? 1 : 0) +
                    (namaz.isha.takbir_e_ula === true ? 1 : 0),
                  max: 5,
                })
            );
          });
          // console.log(finalData);
          // console.log(finalData.reverse());

          dispatch(fullGraph(finalData.reverse()));
          dispatch(filterData(finalData.reverse()));
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
