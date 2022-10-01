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

const ComposedCharts = () => {
  const data = [
    {
      day: "1",
      Takbire_Ula: 100,
      Namaz: 100,
      Jamat: 100,
      cnt: 490,
    },
    {
      day: "2",
      Takbire_Ula: 70,
      Namaz: 70,
      Jamat: 70,
      cnt: 590,
    },
    {
      day: "3",
      Takbire_Ula: 50,
      Namaz: 50,
      Jamat: 50,
      cnt: 350,
    },
    {
      day: "4",
      Takbire_Ula: 60,
      Namaz: 60,
      Jamat: 60,
      cnt: 480,
    },
    {
      day: "5",
      Takbire_Ula: 75,
      Namaz: 75,
      Jamat: 75,
      cnt: 460,
    },
    {
      day: "6",
      Takbire_Ula: 80,
      Namaz: 80,
      Jamat: 80,
      cnt: 380,
    },
    {
      day: "7",
      Takbire_Ula: 90,
      Namaz: 90,
      Jamat: 90,
      cnt: 380,
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
      className="bg-white rounded-xl"
    >
      <CartesianGrid stroke="#f5f5f5"  />

      <XAxis
        dataKey="day"
        label={{ value: "Day", position: "insideBottomRight", offset: 0 }}
        scale="band"
      />

      {/* <YAxis label={{ value: "", angle: -90, position: "insideLeft" }}/> */}

      <Tooltip />
      <Legend />

      <Area type="monotone" dataKey="Jamat" fill="#f6d860" stroke="##0eca2d" />

      <Bar dataKey="Namaz" barSize={20} fill="#0eca2d" />

      <Line type="monotone" dataKey="Takbire_Ula" stroke="#ff7300" />
    </ComposedChart>
  );
};

export default ComposedCharts;
