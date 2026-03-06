'use client';

import React, { useState } from 'react';
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
  const [showAddSessionModal, setShowAddSessionModal] = useState(false);
  const [sessionForm, setSessionForm] = useState({
    courseName: '',
    date: '',
    timeStart: '01:32 pm',
    timeEnd: '01:32 pm',
    description: '',
    platform: '',
    zoomLink: '',
  });

  const timeOptions = [
    '08:00 am','08:30 am','09:00 am','09:30 am','10:00 am','10:30 am',
    '11:00 am','11:30 am','12:00 pm','12:30 pm','01:00 pm','01:30 pm',
    '01:32 pm','02:00 pm','02:30 pm','03:00 pm','03:30 pm','04:00 pm',
    '04:30 pm','05:00 pm','05:30 pm','06:00 pm','06:30 pm','07:00 pm',
    '07:30 pm','08:00 pm','08:30 pm','09:00 pm',
  ];

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setSessionForm({ ...sessionForm, [e.target.name]: e.target.value });
  };

  const handleAddSession = (e: React.FormEvent) => {
    e.preventDefault();
    setSessionForm({ courseName: '', date: '', timeStart: '01:32 pm', timeEnd: '01:32 pm', description: '', platform: '', zoomLink: '' });
    setShowAddSessionModal(false);
  };

  const openModal = () => setShowAddSessionModal(true);

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
                onApplyNow={openModal}
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

              {/* Add Session Button */}
              <div className="flex justify-center pt-2">
                <button
                  onClick={openModal}
                  className="px-8 py-3 bg-gradient-to-r from-[#FF8A00] to-[#FFB84D] text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 text-base"
                >
                  + Add Session
                </button>
              </div>
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

      {/* Add Session Modal */}
      {showAddSessionModal && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center px-4 py-8 overflow-y-auto session-overlay"
          style={{ background: 'linear-gradient(160deg, #F5A97F 0%, #F0936A 40%, #EDA882 70%, #F7C4A0 100%)' }}
          onClick={(e) => { if (e.target === e.currentTarget) setShowAddSessionModal(false); }}
        >
          <style>{`
            @keyframes sessionOverlayIn {
              from { opacity: 0; }
              to   { opacity: 1; }
            }
            @keyframes sessionCardIn {
              from { opacity: 0; transform: translateY(50px) scale(0.96); }
              to   { opacity: 1; transform: translateY(0)    scale(1); }
            }
            @keyframes sessionTitleIn {
              from { opacity: 0; transform: translateY(-20px); }
              to   { opacity: 1; transform: translateY(0); }
            }
            @keyframes sessionBtnIn {
              from { opacity: 0; transform: translateY(20px); }
              to   { opacity: 1; transform: translateY(0); }
            }
            .session-overlay  { animation: sessionOverlayIn 0.25s ease forwards; }
            .session-card-in  { animation: sessionCardIn  0.4s cubic-bezier(0.34,1.4,0.64,1) 0.1s both; }
            .session-title-in { animation: sessionTitleIn 0.35s ease 0.05s both; }
            .session-btn-in   { animation: sessionBtnIn   0.35s ease 0.35s both; }
            .s-input {
              width: 100%; padding: 10px 14px; border-radius: 10px;
              border: 1.5px solid #d1d5db; background: #fff;
              font-size: 14px; color: #374151; outline: none;
              transition: border-color 0.2s, box-shadow 0.2s;
            }
            .s-input:focus { border-color: #FF8A00; box-shadow: 0 0 0 3px rgba(255,138,0,0.15); }
            .s-input::placeholder { color: #9ca3af; }
          `}</style>

          {/* Title — above the card */}
          <h2 className="session-title-in text-3xl font-extrabold text-gray-900 mb-6 text-center drop-shadow-sm">
            Add New Session
          </h2>

          {/* White Card */}
          <div className="session-card-in bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 space-y-4">

            {/* Course Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1.5">Course Name</label>
              <input
                type="text"
                name="courseName"
                value={sessionForm.courseName}
                onChange={handleFormChange}
                required
                placeholder="Course"
                className="s-input"
              />
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1.5">Data</label>
              <input
                type="date"
                name="date"
                value={sessionForm.date}
                onChange={handleFormChange}
                required
                className="s-input"
              />
            </div>

            {/* Start & End Time */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1.5">Start Time</label>
                <select
                  name="timeStart"
                  value={sessionForm.timeStart}
                  onChange={handleFormChange}
                  className="s-input cursor-pointer"
                >
                  {timeOptions.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-1.5">End Time</label>
                <select
                  name="timeEnd"
                  value={sessionForm.timeEnd}
                  onChange={handleFormChange}
                  className="s-input cursor-pointer"
                >
                  {timeOptions.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1.5">Description</label>
              <textarea
                name="description"
                value={sessionForm.description}
                onChange={handleFormChange}
                rows={3}
                className="s-input resize-none"
              />
            </div>

            {/* Session Platform */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1.5">Session Platform</label>
              <input
                type="text"
                name="platform"
                value={sessionForm.platform}
                onChange={handleFormChange}
                placeholder="Zoom"
                className="s-input"
              />
            </div>

            {/* Zoom Link */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1.5">Zoom Link</label>
              <input
                type="url"
                name="zoomLink"
                value={sessionForm.zoomLink}
                onChange={handleFormChange}
                placeholder="Paste Zoom Meeting Link"
                className="s-input"
              />
            </div>
          </div>

          {/* Create Zoom Session button — below the card */}
          <form onSubmit={handleAddSession} className="session-btn-in mt-7">
            <button
              type="submit"
              className="px-12 py-3.5 rounded-xl bg-[#FF8A00] text-gray-900 font-bold text-base tracking-wide shadow-xl hover:bg-[#e07800] hover:scale-105 active:scale-95 transition-all duration-200"
            >
              Create Zoom Session
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
