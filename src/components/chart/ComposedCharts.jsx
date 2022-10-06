import React from "react";
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
import { useGetNamazsQuery } from "../../features/namaz/namazApi";
import { pastDays } from "../../utils/pastDays";

const ComposedCharts = () => {
  const prvDays = pastDays(7);

  const { data: resData } = useGetNamazsQuery({ email: "", date: prvDays });

  if (resData) {
    // console.log(resData);
  }

  const data = [
    {
      day: "1",
      Takbire_Ula: 5,
      Namaz: 5,
      Jamat: 5,
      max: 5,
    },
    {
      day: "2",
      Takbire_Ula: 4,
      Namaz: 4,
      Jamat: 4,
      max: 5,
    },
    {
      day: "3",
      Takbire_Ula: 2,
      Namaz: 2,
      Jamat: 2,
      max: 5,
    },
    {
      day: "4",
      Takbire_Ula: 3,
      Namaz: 3,
      Jamat: 3,
      max: 5,
    },
    {
      day: "5",
      Takbire_Ula: 4,
      Namaz: 4,
      Jamat: 4,
      max: 5,
    },
    {
      day: "6",
      Takbire_Ula: 4,
      Namaz: 4,
      Jamat: 4,
      max: 5,
    },
    {
      day: "7",
      Takbire_Ula: 5,
      Namaz: 5,
      Jamat: 5,
      max: 5,
    },
  ];
  return (
    <ComposedChart
      width={400}
      height={400}
      data={data}
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

      <Line
        type="monotone"
        dataKey="Takbire_Ula"
        stroke="#f6d860"
        fill="#ff6161"
      />

      <Area type="monotone" dataKey="Jamat" fill="#daadff" stroke="#00fbff" />

      <Bar dataKey="Namaz" barSize={20} fill="#0eca2d" />
    </ComposedChart>
  );
};

export default ComposedCharts;
