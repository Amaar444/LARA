"use client";

import React from "react";
import Image from "next/image";

interface ActivityItem {
  id: number;
  name: string;
  activity: string;
  date: string;
  time: string;
}

interface LatestActivityTableProps {
  activities: ActivityItem[];
}

const LatestActivityTable: React.FC<LatestActivityTableProps> = ({ activities }) => {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-lg animate-slideUp" style={{ animationDelay: "0.7s" }}>
      {/* Header with Logo */}
      <div className="flex items-center gap-3 mb-4">
        <Image
          src="/images/Home in/Frame 1984077959.png"
          alt="LARA Logo"
          width={40}
          height={40}
          className="rounded-lg"
        />
        <h3 className="text-lg font-bold text-gray-800">latest activity</h3>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 px-3 text-sm font-semibold text-gray-700">Name</th>
              <th className="text-left py-2 px-3 text-sm font-semibold text-gray-700">activity in ontime</th>
              <th className="text-left py-2 px-3 text-sm font-semibold text-gray-700">Date</th>
              <th className="text-left py-2 px-3 text-sm font-semibold text-gray-700">Time</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((item, index) => (
              <tr 
                key={item.id}
                className={`border-b border-gray-100 hover:bg-orange-50 transition-colors animate-fadeIn ${
                  index % 2 === 0 ? "bg-white" : "bg-orange-50/30"
                }`}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <td className="py-3 px-3 text-sm text-gray-800 font-medium">{item.name}</td>
                <td className="py-3 px-3 text-sm text-gray-600">{item.activity}</td>
                <td className="py-3 px-3 text-sm text-gray-600">{item.date}</td>
                <td className="py-3 px-3 text-sm text-gray-600">{item.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LatestActivityTable;
