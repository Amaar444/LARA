"use client";

import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

interface BarChartCardProps {
  title: string;
  data: { course: string; rate: number }[];
  barColor?: string;
  orientation?: "horizontal" | "vertical";
}

const BarChartCard: React.FC<BarChartCardProps> = ({ title, data, barColor = "#FF8A00", orientation = "horizontal" }) => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
      <h3 className="text-xl font-bold text-gray-900 mb-6">{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} layout={orientation === "horizontal" ? "vertical" : "horizontal"} margin={{ top: 5, right: 30, left: orientation === "horizontal" ? 100 : 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          {orientation === "horizontal" ? (
            <>
              <XAxis type="number" domain={[0, 100]} />
              <YAxis type="category" dataKey="course" tick={{ fontSize: 12 }} />
            </>
          ) : (
            <>
              <XAxis type="category" dataKey="course" />
              <YAxis type="number" domain={[0, 100]} />
            </>
          )}
          <Tooltip />
          <Bar dataKey="rate" fill={barColor} radius={orientation === "horizontal" ? [0, 8, 8, 0] : [8, 8, 0, 0]} label={{ position: orientation === "horizontal" ? "right" : "top", formatter: (value: any) => `${value}%` }}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={barColor} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartCard;
