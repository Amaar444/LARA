"use client";

import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

interface PieChartCardProps {
  title: string;
  data: { name: string; value: number; color: string }[];
}

const PieChartCard: React.FC<PieChartCardProps> = ({ title, data }) => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
      <h3 className="text-xl font-bold text-gray-900 mb-6">{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            label={({ value }) => `${value}%`}
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartCard;
