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
  Cell,
  LabelList,
} from "recharts";

interface DropoutComparisonChartProps {
  data: { category: string; rate: number }[];
}

const DropoutComparisonChart: React.FC<DropoutComparisonChartProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-lg animate-slideUp" style={{ animationDelay: "0.5s" }}>
      <h3 className="text-sm font-semibold text-gray-700 mb-4 text-center">
        Dropout Comparison: All Students vs 3+ Domains
      </h3>
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 30, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis 
              dataKey="category" 
              tick={{ fontSize: 11 }}
            />
            <YAxis 
              tick={{ fontSize: 11 }}
              label={{ value: "Dropout Rate", angle: -90, position: "insideLeft", fontSize: 10 }}
              domain={[0, 0.12]}
              tickFormatter={(value) => value.toFixed(2)}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "#fff", 
                border: "1px solid #ddd",
                borderRadius: "8px",
                fontSize: "12px"
              }}
              formatter={(value: any) => [`${(value * 100).toFixed(1)}%`, "Dropout Rate"]}
            />
            <Bar dataKey="rate" radius={[4, 4, 0, 0]} barSize={60}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill="#FFA500" />
              ))}
              <LabelList 
                dataKey="rate" 
                position="top" 
                fontSize={11}
                formatter={(value: any) => `${(value * 100).toFixed(1)}%`}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DropoutComparisonChart;
