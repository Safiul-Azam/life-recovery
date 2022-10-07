import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
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
      <PolarGrid />
      <PolarAngleAxis dataKey="namaz" stroke="#e2e8f0" fill="#0eca2d" />
      <PolarRadiusAxis stroke="#f6d860" fill="#0eca2d" />
      <Radar
        name="Mike"
        dataKey="count"
        stroke="#00fbff"
        fill="#24ff48"
        fillOpacity={0.5}
      />
    </RadarChart>
  );
};

export default Calculate;
