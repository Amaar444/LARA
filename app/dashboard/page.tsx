'use client';

import React from 'react';
import {
  DashboardNavbar,
  StatsCard,
  CalendarCard,
  ScheduleItem,
  BarChartCard,
  PieChartCard,
  ScatterChartCard,
  DropoutChartCard,
} from '@/components/dashboard';
import { statsData } from '@/data/stats';
import { upcomingSessions, calendarData } from '@/data/courses';
import {
  topCoursesData,
  bottomCoursesData,
  dropoutRateData,
  repeatCoursesData,
  correlationData,
} from '@/data/analytics';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#FFF7E6]">
      {/* Navigation Bar */}
      <DashboardNavbar />

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Statistics Cards Section */}
        <section className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {statsData.map((stat) => (
              <StatsCard
                key={stat.id}
                title={stat.title}
                value={stat.value}
                icon={stat.icon}
                bgColor={stat.bgColor}
                textColor={stat.textColor}
              />
            ))}
          </div>
        </section>

        {/* Calendar & Schedule Section */}
        <section className="mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Calendar */}
            <div className="lg:col-span-1">
              <CalendarCard
                month={calendarData.month}
                year={calendarData.year}
                selectedDate={calendarData.selectedDate}
                days={calendarData.days}
              />
            </div>

            {/* Upcoming Sessions */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Upcoming Sessions
              </h2>
              {upcomingSessions.map((session) => (
                <ScheduleItem
                  key={session.id}
                  day={session.day}
                  weekday={session.weekday}
                  title={session.title}
                  timeStart={session.timeStart}
                  timeEnd={session.timeEnd}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Analytics Charts Section - Top Row */}
        <section className="mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Top 5 Courses by Success Rate */}
            <BarChartCard
              title="Top 5 Courses by Success Rate"
              data={topCoursesData}
              barColor="#FF8A00"
            />

            {/* Bottom 5 Courses by Success Rate */}
            <BarChartCard
              title="Bottom 5 Courses by Success Rate"
              data={bottomCoursesData}
              barColor="#FFD199"
            />
          </div>
        </section>

        {/* Analytics Charts Section - Bottom Row */}
        <section className="mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Dropout Rate by Course Duration */}
            <DropoutChartCard
              title="Dropout Rate by Course Duration"
              data={dropoutRateData}
            />

            {/* Percentage of Students Who Repeated Courses */}
            <PieChartCard
              title="Percentage of Students Who Repeated Courses"
              data={repeatCoursesData}
            />
          </div>
        </section>

        {/* Correlation Scatter Plot */}
        <section className="mb-8">
          <ScatterChartCard
            title="Correlation Between Pre-Course and Final Exam"
            data={correlationData}
            correlationCoefficient={0.02}
          />
        </section>
      </main>
    </div>
  );
}
