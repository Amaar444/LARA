"use client";

import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

interface DropoutChartCardProps {
  title: string;
  data: { duration: string; rate: number }[];
}

const DropoutChartCard: React.FC<DropoutChartCardProps> = ({ title, data }) => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-lg transform transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
      <h3 className="text-xl font-bold text-gray-900 mb-6">{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="duration" />
          <YAxis domain={[0, 50]} />
          <Tooltip />
          <Bar dataKey="rate" fill="#FF8A00" radius={[8, 8, 0, 0]} label={{ position: "top", formatter: (value: any) => `${value}%` }}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={`rgba(255, 138, 0, ${1 - index * 0.2})`} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DropoutChartCard;
