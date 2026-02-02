"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Cell,
  LabelList,
} from "recharts";

interface DistributionChartProps {
  data: { domain: number; students: number }[];
  average: number;
}

const DistributionChart: React.FC<DistributionChartProps> = ({ data, average }) => {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-lg animate-slideUp" style={{ animationDelay: "0.2s" }}>
      <h3 className="text-sm font-semibold text-gray-700 mb-4 text-center">
        Distribution of Number of Domains Studied per Student
      </h3>
      <div className="h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis 
              dataKey="domain" 
              tick={{ fontSize: 11 }}
              label={{ value: "Number of Different Domains", position: "bottom", fontSize: 10, offset: -5 }}
            />
            <YAxis 
              tick={{ fontSize: 11 }}
              label={{ value: "Number of Students", angle: -90, position: "insideLeft", fontSize: 10 }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "#fff", 
                border: "1px solid #ddd",
                borderRadius: "8px",
                fontSize: "12px"
              }}
            />
            <ReferenceLine 
              y={average} 
              stroke="#FF8C00" 
              strokeDasharray="5 5" 
              label={{ value: `Average = ${average}`, position: "right", fontSize: 10, fill: "#FF8C00" }}
            />
            <Bar dataKey="students" radius={[4, 4, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill="#FFA500" />
              ))}
              <LabelList dataKey="students" position="top" fontSize={10} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DistributionChart;
