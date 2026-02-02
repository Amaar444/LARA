"use client";

import React from "react";
import {
  AdminNavbar,
  AdminStatsCard,
  DistributionChart,
  PendingApprovals,
  DropoutRateChart,
  DropoutComparisonChart,
  RepeatedCoursesChart,
  LatestActivityTable,
} from "@/components/admin-dashboard";
import {
  adminStats,
  distributionData,
  distributionAverage,
  pendingApprovals,
  dropoutRateData,
  dropoutComparisonData,
  repeatedCoursesData,
  latestActivityData,
} from "@/data/adminDashboard";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <AdminNavbar activeTab="dashboard" />

      {/* Main Content */}
      <main className="px-8 py-6 max-w-7xl mx-auto">
        {/* Stats Cards */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <AdminStatsCard type="students" value={adminStats.totalStudents} delay={0} />
          <AdminStatsCard type="instructors" value={adminStats.totalInstructors} delay={0.1} />
          <AdminStatsCard type="courses" value={adminStats.totalCourses} delay={0.2} />
          <AdminStatsCard type="revenue" value={adminStats.revenue} delay={0.3} />
        </div>

        {/* Distribution Chart & Pending Approvals */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
          <div className="lg:col-span-3">
            <DistributionChart data={distributionData} average={distributionAverage} />
          </div>
          <div className="lg:col-span-2">
            <PendingApprovals approvals={pendingApprovals} />
          </div>
        </div>

        {/* Dropout Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <DropoutRateChart data={dropoutRateData} />
          <DropoutComparisonChart data={dropoutComparisonData} />
        </div>

        {/* Pie Chart & Latest Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <RepeatedCoursesChart data={repeatedCoursesData} />
          </div>
          <div className="lg:col-span-2">
            <LatestActivityTable activities={latestActivityData} />
          </div>
        </div>
      </main>
    </div>
  );
}
