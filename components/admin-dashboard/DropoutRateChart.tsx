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

interface DropoutRateChartProps {
  data: { level: string; rate: number }[];
}

const DropoutRateChart: React.FC<DropoutRateChartProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-lg animate-slideUp" style={{ animationDelay: "0.4s" }}>
      <h3 className="text-sm font-semibold text-gray-700 mb-4 text-center">
        Dropout Rate by Course Level
      </h3>
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis 
              dataKey="level" 
              tick={{ fontSize: 11 }}
            />
            <YAxis 
              tick={{ fontSize: 11 }}
              label={{ value: "Dropout Rate (%)", angle: -90, position: "insideLeft", fontSize: 10 }}
              domain={[0, 100]}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "#fff", 
                border: "1px solid #ddd",
                borderRadius: "8px",
                fontSize: "12px"
              }}
              formatter={(value) => [`${value}%`, "Dropout Rate"]}
            />
            <Bar dataKey="rate" radius={[4, 4, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill="#FFA500" />
              ))}
              <LabelList 
                dataKey="rate" 
                position="top" 
                fontSize={10}
                formatter={(value: number) => `${value}%`}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DropoutRateChart;
