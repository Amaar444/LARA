"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [profileData, setProfileData] = useState({
    name: "Nourhan Hessen",
    email: "nourhanhessen142@gmail.com",
    gender: "Female",
    phone: "01535451875",
  });

  const handleEdit = (field: string) => {
    setIsEditing(field);
  };

  const handleSave = () => {
    setIsEditing(null);
    alert("Profile updated successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm px-8 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <Image src="/images/logo.jpg" alt="LARA Logo" width={50} height={50} className="rounded-full" />
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="border border-gray-300 rounded-lg px-4 py-2 w-48 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>
          </div>

          <nav className="flex gap-6 text-sm">
            <Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
            <Link href="/dashboard" className="text-gray-700 hover:text-gray-900">Dashboard</Link>
            <Link href="/course-player" className="text-gray-700 hover:text-gray-900">Course Player</Link>
            <Link href="/courses" className="text-gray-700 hover:text-gray-900">Recommended Courses</Link>
            <Link href="/quiz" className="text-gray-700 hover:text-gray-900">Quiz</Link>
            <Link href="/about" className="text-gray-900 font-semibold border-b-2 border-gray-900">About</Link>
          </nav>

          <div className="flex items-center gap-3">
            <Image src="/images/dashboard/Ellipse 68.png" alt="Profile" width={40} height={40} className="rounded-full" />
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-8 py-12">
        {/* Back Button */}
        <Link href="/dashboard" className="inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 mb-8">
          <span>←</span> Back
        </Link>

        {/* Profile Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Avatar */}
          <div className="flex flex-col items-center mb-8">
            <div className="relative">
              <Image
                src="/images/dashboard/Ellipse 68.png"
                alt="Profile Photo"
                width={120}
                height={120}
                className="rounded-full border-4 border-orange-200"
              />
              <button className="absolute bottom-0 right-0 w-10 h-10 bg-gradient-to-r from-[#FFAE74] to-[#FFF4B7] rounded-full flex items-center justify-center text-xl hover:opacity-90 transition-opacity">
                ✏️
              </button>
            </div>
          </div>

          {/* Profile Fields */}
          <div className="space-y-6">
            {/* Full Name */}
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <div className="flex-1">
                <div className="text-sm text-gray-500 mb-1">Full Name</div>
                {isEditing === "name" ? (
                  <input
                    type="text"
                    value={profileData.name}
                    onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                    className="text-lg font-medium border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                ) : (
                  <div className="text-lg font-medium">{profileData.name}</div>
                )}
              </div>
              <button
                onClick={() => (isEditing === "name" ? handleSave() : handleEdit("name"))}
                className="text-orange-600 hover:text-orange-700 font-semibold"
              >
                {isEditing === "name" ? "Save" : "Edit"}
              </button>
            </div>

            {/* Email */}
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <div className="flex-1">
                <div className="text-sm text-gray-500 mb-1">Email</div>
                {isEditing === "email" ? (
                  <input
                    type="email"
                    value={profileData.email}
                    onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                    className="text-lg font-medium border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                ) : (
                  <div className="text-lg font-medium">{profileData.email}</div>
                )}
              </div>
              <button
                onClick={() => (isEditing === "email" ? handleSave() : handleEdit("email"))}
                className="text-orange-600 hover:text-orange-700 font-semibold"
              >
                {isEditing === "email" ? "Save" : "Edit"}
              </button>
            </div>

            {/* Gender */}
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <div className="flex-1">
                <div className="text-sm text-gray-500 mb-1">Gender</div>
                {isEditing === "gender" ? (
                  <select
                    value={profileData.gender}
                    onChange={(e) => setProfileData({ ...profileData, gender: e.target.value })}
                    className="text-lg font-medium border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                ) : (
                  <div className="text-lg font-medium">{profileData.gender}</div>
                )}
              </div>
              <button
                onClick={() => (isEditing === "gender" ? handleSave() : handleEdit("gender"))}
                className="text-orange-600 hover:text-orange-700 font-semibold"
              >
                {isEditing === "gender" ? "Save" : "Edit"}
              </button>
            </div>

            {/* Phone Number */}
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <div className="flex-1">
                <div className="text-sm text-gray-500 mb-1">Phone Number</div>
                {isEditing === "phone" ? (
                  <input
                    type="tel"
                    value={profileData.phone}
                    onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                    className="text-lg font-medium border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                ) : (
                  <div className="text-lg font-medium">{profileData.phone}</div>
                )}
              </div>
              <button
                onClick={() => (isEditing === "phone" ? handleSave() : handleEdit("phone"))}
                className="text-orange-600 hover:text-orange-700 font-semibold"
              >
                {isEditing === "phone" ? "Save" : "Edit"}
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-start mb-8">
            <Image src="/images/logo.jpg" alt="LARA Logo" width={60} height={60} className="rounded-full" />
            <div className="flex gap-8 text-sm">
              <div><span className="font-semibold">Phone:</span> +123 456 789</div>
              <div><span className="font-semibold">Email:</span> info@lara.com</div>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm border-t border-gray-800 pt-6">
            © 2026 LARA – All rights reserved
          </div>
        </div>
      </footer>
    </div>
  );
}
