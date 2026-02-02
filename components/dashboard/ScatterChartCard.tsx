"use client";

import React from "react";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface ScatterChartCardProps {
  title: string;
  data: { preCourse: number; finalExam: number }[];
  correlationCoefficient?: number;
}

const ScatterChartCard: React.FC<ScatterChartCardProps> = ({ title, data, correlationCoefficient = 0.02 }) => {
  return (
    <div className="bg-white rounded-3xl p-5 shadow-lg transform transition-all duration-300 hover:shadow-2xl max-w-4xl mx-auto">
      <h3 className="text-base font-bold text-gray-900 mb-1">{title}</h3>
      <p className="text-xs text-gray-600 mb-3">Correlation coefficient: r = {correlationCoefficient.toFixed(2)}</p>
      <ResponsiveContainer width="100%" height={420}>
        <ScatterChart margin={{ top: 10, right: 15, bottom: 35, left: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis
            type="number"
            dataKey="preCourse"
            name="Pre-Course Score"
            domain={[0, 100]}
            label={{ value: "Pre-Course Exam Score", position: "insideBottom", offset: -8, style: { fontSize: 11, fontWeight: 600 } }}
            tick={{ fontSize: 10 }}
          />
          <YAxis
            type="number"
            dataKey="finalExam"
            name="Final Score"
            domain={[0, 100]}
            label={{ value: "Final Exam Score", angle: -90, position: "insideLeft", style: { fontSize: 11, fontWeight: 600 } }}
            tick={{ fontSize: 10 }}
          />
          <Tooltip 
            cursor={{ strokeDasharray: "3 3" }} 
            contentStyle={{ fontSize: 11, borderRadius: 8 }}
            labelStyle={{ fontWeight: 600 }}
          />
          <Scatter 
            name="Student Scores" 
            data={data} 
            fill="#FF8A00" 
            fillOpacity={0.7}
            shape="circle"
          />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ScatterChartCard;
