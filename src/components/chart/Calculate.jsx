import React from "react";
import {
    PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar,
    RadarChart
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
      height={380}
      data={data}
      className="bg-base-100 rounded-full shadow-inner shadow-secondary"
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="namaz" />
      <PolarRadiusAxis />
      <Radar
        name="Mike"
        dataKey="A"
        stroke="#f6d860"
        fill="#0eca2d"
        fillOpacity={0.6}
      />
    </RadarChart>
  );
};

export default Calculate;
