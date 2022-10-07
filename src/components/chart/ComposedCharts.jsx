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
  const { fullGraph: resData, day } = useSelector((state) => state.filter);

  const prvDays = pastDays(day);

  const [chartData, setChartData] = useState(
    prvDays.reverse().map((date) => ({
      day: date.slice(0, 2),
      Takbire_Ula: 0,
      Namaz: 0,
      Jamat: 0,
      max: 5,
    }))
  );

  useEffect(() => {
    if (resData.length !== 0) {
      setChartData(resData);
    }
  }, [resData]);

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
