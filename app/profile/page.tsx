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
      <footer 
        className="text-black px-10 py-4 mt-5"
        style={{ background: "linear-gradient(to right, #f2b164, #e5914d, #f2b164)" }}
      >
        {/* Top */}
        <div className="flex flex-col md:flex-row items-center justify-between border-b border-white/50 pb-2.5 mb-4 gap-4">
          <Image src="/images/my-courses/logo.png" alt="LARA logo" width={60} height={60} />

          <div className="flex flex-col md:flex-row gap-4 md:gap-10">
            <div className="flex items-center gap-2 text-sm">
              <Image src="/images/my-courses/nm.png" alt="Phone" width={20} height={20} />
              <span className="font-semibold">Phone:</span>
              <span className="text-white">+123 456 789</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Image src="/images/my-courses/Overlay+Border.png" alt="Email" width={20} height={20} />
              <span className="font-semibold">Email:</span>
              <span className="text-white">info@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Main */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 mb-2.5">
          <div className="max-w-[260px]">
            <p className="text-sm">An innovative educational platform offering smart courses to enhance your skills.</p>
          </div>

          <div>
            <p className="font-bold mb-1">Quick Links</p>
            <ul className="text-sm space-y-0.5 list-disc ml-4">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/courses" className="hover:underline">Courses</Link></li>
              <li><Link href="/about" className="hover:underline">About LARA</Link></li>
              <li><Link href="#" className="hover:underline">Instructors</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-bold mb-1">Support</p>
            <ul className="text-sm space-y-0.5 list-disc ml-4">
              <li><Link href="#" className="hover:underline">Contact Us</Link></li>
              <li><Link href="#" className="hover:underline">FAQ</Link></li>
              <li><Link href="#" className="hover:underline">Privacy</Link></li>
              <li><Link href="#" className="hover:underline">Terms</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-bold mb-1">Your Account</p>
            <ul className="text-sm space-y-0.5 list-disc ml-4">
              <li><Link href="/profile" className="hover:underline">Profile</Link></li>
              <li><Link href="#" className="hover:underline">Settings</Link></li>
              <li><Link href="/login" className="hover:underline">Logout</Link></li>
            </ul>
          </div>
        </div>

        <p className="text-center text-[13px] text-white">© 2025 LARA — All rights reserved</p>
      </footer>
    </div>
  );
}
