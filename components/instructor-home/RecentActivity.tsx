"use client";

import React from "react";
import { FaChevronDown } from "react-icons/fa";
import ActivityItem from "./ActivityItem";

interface Activity {
  id: number;
  text: string;
  type: "completed" | "submitted" | "finished";
}

interface RecentActivityProps {
  activities: Activity[];
  filter: string;
  onFilterChange: (value: string) => void;
}

const RecentActivity: React.FC<RecentActivityProps> = ({ activities, filter, onFilterChange }) => {
  return (
    <section className="py-12 px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 animate-fadeIn">Recent Activity</h2>
          <div className="relative">
            <select
              value={filter}
              onChange={(e) => onFilterChange(e.target.value)}
              className="px-5 py-2 rounded-full border-2 border-gray-300 bg-white text-gray-700 font-medium focus:border-orange-400 focus:outline-none appearance-none cursor-pointer pr-10 hover:border-gray-400 transition-colors"
            >
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
            </select>
            <FaChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Activity List */}
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <ActivityItem
              key={activity.id}
              id={activity.id}
              text={activity.text}
              type={activity.type}
              delay={0.1 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentActivity;
