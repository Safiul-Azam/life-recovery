import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  //   YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
} from "recharts";
import { pastDays } from "../../utils/pastDays";

const ComposedCharts = () => {
  const resData = useSelector((state) => state.filter.fullGraph);
  const prvDays = pastDays(7);
  const [chartData, setChartData] = useState(
    prvDays.reverse().map((date) => ({
      day: date.slice(0, 2),
      Takbire_Ula: 0,
      Namaz: 0,
      Jamat: 0,
      max: 5,
    }))
  );

  // const initChartDate = prvDays.map((date) => ({
  //   day: date.slice(0, 2),
  //   Takbire_Ula: 0,
  //   Namaz: 0,
  //   Jamat: 0,
  //   max: 5,
  // }));


  // useEffect(() => {
  //   // setChartData(initChartDate);

  //   if (resData.length !== 0) {
      
  //     // prvDays.reverse().map((d) => {
  //     //   // findDate
  //     //   return resData.find(
  //     //     (namaz) =>
  //     //       namaz.date === d &&
  //     //       finalData.push({
  //     //         day: d.slice(0, 2),
  //     //         Namaz:
  //     //           0 +
  //     //           (namaz.fajr.complete === true ? 1 : 0) +
  //     //           (namaz.dhuhr.complete === true ? 1 : 0) +
  //     //           (namaz.asr.complete === true ? 1 : 0) +
  //     //           (namaz.maghrib.complete === true ? 1 : 0) +
  //     //           (namaz.isha.complete === true ? 1 : 0),
  //     //         Jamat:
  //     //           0 +
  //     //           (namaz.fajr.jamaat === true ? 1 : 0) +
  //     //           (namaz.dhuhr.jamaat === true ? 1 : 0) +
  //     //           (namaz.asr.jamaat === true ? 1 : 0) +
  //     //           (namaz.maghrib.jamaat === true ? 1 : 0) +
  //     //           (namaz.isha.jamaat === true ? 1 : 0),
  //     //         Takbire_Ula:
  //     //           0 +
  //     //           (namaz.fajr.takbir_e_ula === true ? 1 : 0) +
  //     //           (namaz.dhuhr.takbir_e_ula === true ? 1 : 0) +
  //     //           (namaz.asr.takbir_e_ula === true ? 1 : 0) +
  //     //           (namaz.maghrib.takbir_e_ula === true ? 1 : 0) +
  //     //           (namaz.isha.takbir_e_ula === true ? 1 : 0),
  //     //         max: 5,
  //     //       })
  //     //   );
  //     // });
  //   }
  // }, [resData, prvDays]);

  useEffect(() => {
    if (resData.length !== 0) {
      setChartData(resData)
    }
  }, [resData])
  

  // const data = [
  //   {
  //     day: "1",
  //     Takbire_Ula: 5,
  //     Namaz: 5,
  //     Jamat: 5,
  //     max: 5,
  //   },
  //   {
  //     day: "2",
  //     Takbire_Ula: 4,
  //     Namaz: 4,
  //     Jamat: 4,
  //     max: 5,
  //   },
  //   {
  //     day: "3",
  //     Takbire_Ula: 2,
  //     Namaz: 2,
  //     Jamat: 2,
  //     max: 5,
  //   },
  //   {
  //     day: "4",
  //     Takbire_Ula: 3,
  //     Namaz: 3,
  //     Jamat: 3,
  //     max: 5,
  //   },
  //   {
  //     day: "5",
  //     Takbire_Ula: 4,
  //     Namaz: 4,
  //     Jamat: 4,
  //     max: 5,
  //   },
  //   {
  //     day: "6",
  //     Takbire_Ula: 4,
  //     Namaz: 4,
  //     Jamat: 4,
  //     max: 5,
  //   },
  //   {
  //     day: "7",
  //     Takbire_Ula: 5,
  //     Namaz: 5,
  //     Jamat: 5,
  //     max: 5,
  //   },
  // ];
  return (
    <ComposedChart
      width={400}
      height={400}
      data={chartData}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      }}
      className="bg-slate-800/[0.5] backdrop-blur-sm rounded-xl"
    >
      <CartesianGrid stroke="#e2e8f0" />

      <XAxis
        className="text-slate-200"
        dataKey="day"
        label={{
          value: "Day",
          position: "insideBottomRight",
          offset: 0,
          fill: "#e2e8f0",
        }}
        scale="band"
        stroke="#e2e8f0"
      />

      <Tooltip />
      <Legend />


      <Area type="monotone" dataKey="Jamat" fill="#daadff" stroke="#00fbff" />

      <Bar dataKey="Namaz" barSize={20} fill="#0eca2d" />
      <Line
        type="monotone"
        dataKey="Takbire_Ula"
        stroke="#f6d860"
        fill="#ff6161"
      />
    </ComposedChart>
  );
};

export default ComposedCharts;
