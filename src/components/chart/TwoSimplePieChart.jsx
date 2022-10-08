import React, { useEffect, useState } from "react";
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
  const radius = innerRadius + (outerRadius - innerRadius) * 0.15;

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

const TwoSimplePieChart = ({ name, count, days, kaja }) => {
  const [data, setData] = useState([
    { name: "নামাজ", value: 5 },
    { name: "⛔", value: 5 },
  ]);
  const [colors, setColors] = useState(["#00bd42", "#ff4d4d"]);

  useEffect(() => {
    if (name && count && days) {
      if (kaja) {
        setColors(["#ff4d4d", "#00bd42"]);

        setData([
          { name: `${name}`, value: days - count },
          { name: "✅", value: count },
        ]);
      } else {
        setData([
          { name: `${name}`, value: count },
          { name: "⛔", value: days - count },
        ]);
      }
    }
  }, [name, count, days, kaja]);

  // const COLORS = ["#00bd42", "#ff4d4d"];

  return (
    <PieChart width={110} height={110}>
      <Pie
        dataKey="value"
        data={data}
        cx="50%"
        cy="50%"
        labelLine={false}
        label={renderCustomizedLabel}
        innerRadius={15}
        outerRadius={50}
        fill="#82ca9d"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default TwoSimplePieChart;
