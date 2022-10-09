import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  Tooltip,
} from "recharts";

const defaultData = [
  {
    namaz: "ফজর",
    count: 7,
  },
  {
    namaz: "যোহর",
    count: 7,
  },
  {
    namaz: "আসর",
    count: 7,
  },
  {
    namaz: "মাগরিব",
    count: 7,
  },
  {
    namaz: "এশা",
    count: 7,
  },
];

const CustomizedTooltip = ({ active, payload, label }) => {
  if (active) {
    console.log(payload[0].value, payload[0].payload.days);
    return (
      <div className="chart-tooltip bg-white p-2 px-3 rounded-lg">
        <div className="">
          <h3 className="text-center text-accent border-b-2 border-secondary border-dotted">
            Days: {payload[0].payload.days}
          </h3>
        </div>
        <div className="">
          <p className="text-primary mt-2">{label}:- {payload[0].value}</p>
        </div>
      </div>
    );
  }

  return null;
};

const Calculate = () => {
  const resData = useSelector((state) => state.filter.avg);
  const [data, setData] = useState(defaultData);

  useEffect(() => {
    if (resData.length !== 0) {
      setData(resData);
    }
  }, [resData]);

  return (
    <RadarChart
      cx={185}
      cy={192}
      outerRadius={125}
      width={380}
      height={400}
      data={data}
      className="bg-slate-800/[0.5] backdrop-blur-sm rounded-xl h-full shadow-inner "
    >
      <Tooltip content={<CustomizedTooltip />} />
      <PolarGrid />
      <PolarAngleAxis dataKey="namaz" stroke="#e2e8f0" fill="#0eca2d" />
      <PolarRadiusAxis stroke="#f6d860" fill="#0eca2d" />
      <Radar
        name="namaz"
        dataKey="count"
        stroke="#00fbff"
        fill="#24ff48"
        fillOpacity={0.5}
      />
    </RadarChart>
  );
};

export default Calculate;
