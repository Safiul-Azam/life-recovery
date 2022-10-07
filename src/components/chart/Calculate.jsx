import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from "recharts";

const fullMark = 100;

const data = [
  {
    namaz: "ফজর",
    count: 4,
    fullMark,
  },
  {
    namaz: "যোহর",
    count: 5,
    fullMark,
  },
  {
    namaz: "আসর",
    count: 4,
    fullMark,
  },
  {
    namaz: "মাগরিব",
    count: 7,
    fullMark,
  },
  {
    namaz: "এশা",
    count: 3,
    fullMark,
  },
];

const Calculate = () => {
  const resData = useSelector((state) => state.namaz.data);
  // console.log(resData);
  useEffect(() => {
    if (resData.length !== 0) {
      
    }
  }, [resData])

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
