"use client";

import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

interface RepeatedCoursesChartProps {
  data: { name: string; value: number; color: string }[];
}

const RepeatedCoursesChart: React.FC<RepeatedCoursesChartProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-lg animate-slideUp" style={{ animationDelay: "0.6s" }}>
      <h3 className="text-xs font-semibold text-gray-700 mb-2">
        Percentage of Students Who Repeated Courses
      </h3>
      <div className="h-[180px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={70}
              paddingAngle={2}
              dataKey="value"
              label={({ value }) => `${value}%`}
              labelLine={false}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "#fff", 
                border: "1px solid #ddd",
                borderRadius: "8px",
                fontSize: "12px"
              }}
              formatter={(value) => [`${value}%`, ""]}
            />
            <Legend 
              verticalAlign="bottom" 
              height={36}
              iconType="circle"
              iconSize={8}
              formatter={(value) => <span className="text-xs text-gray-600">{value}</span>}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RepeatedCoursesChart;
