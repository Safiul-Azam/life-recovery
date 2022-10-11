import { scaleOrdinal } from "d3-scale";
import { schemePaired } from "d3-scale-chromatic";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { pastDays } from "../../utils/pastDays";

const colors = scaleOrdinal(schemePaired).range();

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  } 
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const CustomizedTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="chart-tooltip bg-white p-2 px-3 rounded-lg">
        <div className="">
          <h3 className="text-center text-accent border-b-2 border-secondary border-dotted">
            Date: {label}
          </h3>
        </div>
        <div className="">
          <p className="text-primary">Namaz: {payload[0].value}</p>
          <p className="text-accent">Jamat: {payload[1].value}</p>
          <p className="text-[#c9bc00]">Takbire_Ula: {payload[2].value}</p>
        </div>
      </div>
    );
  }

  return null;
};

const ComposedCharts = () => {
  const { fullGraph: resData, day } = useSelector((state) => state.filter);

  const prvDays = pastDays(day);

  const [chartData, setChartData] = useState(
    prvDays.reverse().map((date) => ({
      day: date.slice(0, 2),
      Takbire_Ula: 0,
      Namaz: 0,
      Jamat: 0,
      Max: 5,
    }))
  );

  useEffect(() => {
    if (resData.length !== 0) {
      setChartData(resData);
    }
  }, [resData]);

  return (
    <div className="max-w-[400px]" style={{ width: "100%", height: 400 }}>
      <ResponsiveContainer>
        <ComposedChart
          width={400}
          height={400}
          data={chartData}
          margin={{
            top: 20,
            right: 20,
            bottom: 30,
            left: -20,
          }}
          className="bg-slate-800/[0.5] backdrop-blur-sm rounded-xl"
        >
          <CartesianGrid stroke="#e2e8f0" strokeDasharray="0.5 5" />

          <XAxis
            className="text-slate-200"
            dataKey="day"
            label={{
              value: "Date",
              position: "insideBottom",
              offset: -15,
              fill: "#0eca2d",
            }}
            scale="band"
            stroke="#e2e8f0"
          />
          <YAxis stroke="#e2e8f0" />
          <Tooltip content={<CustomizedTooltip />} />
          {/* <Legend /> */}

          {/* <Area type="monotone" dataKey="Jamat" fill="#daadff" stroke="#00fbff" /> */}

          {/* <Bar dataKey="Namaz" barSize={30} fill="#0eca2d" /> */}
          <Bar
            dataKey="Namaz"
            fill="#0eca2d"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 10]} />
            ))}
          </Bar>

          <Line
            type="monotone"
            dataKey="Jamat"
            stroke="#00fbff"
            fill="#daadff"
          />

          <Line
            type="monotone"
            dataKey="Takbire_Ula"
            stroke="#f6d860"
            fill="#ff6161"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ComposedCharts;
