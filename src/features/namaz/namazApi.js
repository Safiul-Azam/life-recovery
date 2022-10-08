import { apiSlice } from "../api/apiSlice";
import { avg, fullGraph } from "../filter/filterSlice";
import { toDay } from "./namazSlice";

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
          let fajr = 0;
          let dhuhr = 0;
          let asr = 0;
          let maghrib = 0;
          let isha = 0;
          let jamaat = 0;
          let takbir_e_ula = 0;

          // mainData
          date.forEach((d) => {
            // findDate
            resData.find(
              (namaz) =>
                namaz.date === d &&
                finalData.push({
                  day: d.slice(0, 2),

                  // namaz count
                  Namaz:
                    0 +
                    (namaz.fajr.complete === true && (fajr = fajr + 1)
                      ? 1
                      : 0) +
                    (namaz.dhuhr.complete === true && (dhuhr = dhuhr + 1)
                      ? 1
                      : 0) +
                    (namaz.asr.complete === true && (asr = asr + 1) ? 1 : 0) +
                    (namaz.maghrib.complete === true && (maghrib = maghrib + 1)
                      ? 1
                      : 0) +
                    (namaz.isha.complete === true && (isha = isha + 1) ? 1 : 0),

                  // jamat count
                  Jamat:
                    0 +
                    (namaz.fajr.jamaat === true && (jamaat = jamaat + 1)
                      ? 1
                      : 0) +
                    (namaz.dhuhr.jamaat === true && (jamaat = jamaat + 1)
                      ? 1
                      : 0) +
                    (namaz.asr.jamaat === true && (jamaat = jamaat + 1)
                      ? 1
                      : 0) +
                    (namaz.maghrib.jamaat === true && (jamaat = jamaat + 1)
                      ? 1
                      : 0) +
                    (namaz.isha.jamaat === true && (jamaat = jamaat + 1)
                      ? 1
                      : 0),

                  // Takbire_Ula count
                  Takbire_Ula:
                    0 +
                    (namaz.fajr.takbir_e_ula === true &&
                    (takbir_e_ula = takbir_e_ula + 1)
                      ? 1
                      : 0) +
                    (namaz.dhuhr.takbir_e_ula === true &&
                    (takbir_e_ula = takbir_e_ula + 1)
                      ? 1
                      : 0) +
                    (namaz.asr.takbir_e_ula === true &&
                    (takbir_e_ula = takbir_e_ula + 1)
                      ? 1
                      : 0) +
                    (namaz.maghrib.takbir_e_ula === true &&
                    (takbir_e_ula = takbir_e_ula + 1)
                      ? 1
                      : 0) +
                    (namaz.isha.takbir_e_ula === true &&
                    (takbir_e_ula = takbir_e_ula + 1)
                      ? 1
                      : 0),
                  Max: 5,
                })
            );
          });

          const namazCount = [
            {
              namaz: "ফজর",
              count: fajr,
              days: date.length,
              jamaat,
              takbir_e_ula,
            },
            {
              namaz: "যোহর",
              count: dhuhr,
              days: date.length,
              jamaat,
              takbir_e_ula,
            },
            {
              namaz: "আসর",
              count: asr,
              days: date.length,
              jamaat,
              takbir_e_ula,
            },
            {
              namaz: "মাগরিব",
              count: maghrib,
              days: date.length,
              jamaat,
              takbir_e_ula,
            },
            {
              namaz: "এশা",
              count: isha,
              days: date.length,
              jamaat,
              takbir_e_ula,
            },
          ];

          finalData.length !== 0 &&
            dispatch(fullGraph(finalData.reverse())) &&
            dispatch(avg(namazCount));
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
