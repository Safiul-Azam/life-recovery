import React from "react";
import { PieChart, Pie, Tooltip, Cell } from "recharts";

const RADIAN = Math.PI / 190;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.2;

  const x = cx + radius * Math.cos(-midAngle * RADIAN);

  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const TwoSimplePieChart = () => {
  const data = [
    { name: "নামাজ", value: 100 },
    { name: "কাজা", value: 50 },
  ];

  const COLORS = ["#0A993C", "#FF4500"];

  return (
    <PieChart width={110} height={110}>
      <Pie
        dataKey="value"
        data={data}
        cx="50%"
        cy="50%"
        labelLine={false}
        label={renderCustomizedLabel}
        innerRadius={16}
        outerRadius={50}
        fill="#82ca9d"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default TwoSimplePieChart;
