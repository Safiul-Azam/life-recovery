import React from "react";
import { PieChart, Pie, Legend, Tooltip, Cell } from "recharts";

const data01 = [
  { name: "Group A", value: 450 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 550 },
];

const data02 = [
  { name: "Group A", value: 60 },
  { name: "Group B", value: 40 },
];

const COLORS1 = ["#00ff00", "#7FFF00", "#00008B"];
const COLORS2 = ["#0088FE", "#ff4000"];

const TwoSimplePieChart = () => {
  return (
    <section className="-mt-16">
      <PieChart width={700} height={330}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data01}
          cx={200}
          cy={200}
          outerRadius={80}
          fill="#00FF7F"
          label
        >
          {data02.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS1[index % COLORS1.length]}
            />
          ))}
        </Pie>
        <Pie
          dataKey="value"
          data={data02}
          cx={500}
          cy={200}
          innerRadius={40}
          outerRadius={80}
          fill="#82ca9d"
        >
          {data02.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS2[index % COLORS2.length]}
            />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </section>
  );
};

export default TwoSimplePieChart;
