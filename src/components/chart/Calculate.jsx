import React from "react";
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
    A: 70,
    fullMark,
  },
  {
    namaz: "যোহর",
    A: 95,
    fullMark,
  },
  {
    namaz: "আসর",
    A: 75,
    fullMark,
  },
  {
    namaz: "মাগরিব",
    A: 99,
    fullMark,
  },
  {
    namaz: "এশা",
    A: 70,
    fullMark,
  },
];

const Calculate = () => {
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
        dataKey="A"
        stroke="#00fbff"
        fill="#24ff48"
        fillOpacity={0.5}
      />
    </RadarChart>
  );
};

export default Calculate;
