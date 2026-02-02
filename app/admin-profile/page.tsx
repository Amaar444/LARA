"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft, FaEye, FaEyeSlash } from "react-icons/fa";
import { AdminProfileFooter } from "@/components/admin-dashboard";
import { adminProfileData } from "@/data/adminProfile";

export default function AdminProfilePage() {
  const [formData, setFormData] = useState({
    firstName: adminProfileData.firstName,
    lastName: adminProfileData.lastName,
    email: adminProfileData.email,
    phone: adminProfileData.phone,
    bio: adminProfileData.bio,
    password: "******",
    confirmPassword: "******",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Profile updated:", formData);
    // Add save logic here
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Back Button */}
      <div className="px-8 py-6 animate-slideDown">
        <Link 
          href="/admin-dashboard"
          className="inline-flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back</span>
        </Link>
      </div>

      {/* Main Content */}
      <main className="flex-1 px-8 pb-12 max-w-3xl mx-auto w-full">
        <form onSubmit={handleSubmit}>
          {/* Profile Image */}
          <div className="mb-8 animate-slideUp" style={{ animationDelay: "0.1s" }}>
            <div className="relative w-20 h-20 group cursor-pointer">
              <Image
                src={adminProfileData.avatar}
                alt="Admin Profile"
                fill
                className="rounded-full object-cover border-3 border-orange-200 shadow-lg group-hover:border-orange-400 transition-all"
              />
              <div className="absolute inset-0 rounded-full bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-xs">Change</span>
              </div>
            </div>
          </div>

          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="animate-slideUp" style={{ animationDelay: "0.15s" }}>
              <label className="block text-sm text-gray-600 mb-2">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
              />
            </div>
            <div className="animate-slideUp" style={{ animationDelay: "0.2s" }}>
              <label className="block text-sm text-gray-600 mb-2">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Email & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="animate-slideUp" style={{ animationDelay: "0.25s" }}>
              <label className="block text-sm text-gray-600 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
              />
            </div>
            <div className="animate-slideUp" style={{ animationDelay: "0.3s" }}>
              <label className="block text-sm text-gray-600 mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="mb-6 animate-slideUp" style={{ animationDelay: "0.35s" }}>
            <label className="block text-sm text-gray-600 mb-2">Bio</label>
            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all resize-none"
            />
          </div>

          {/* Password Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="animate-slideUp" style={{ animationDelay: "0.4s" }}>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            <div className="animate-slideUp" style={{ animationDelay: "0.45s" }}>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end animate-slideUp" style={{ animationDelay: "0.5s" }}>
            <button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-[#FF8A00] to-[#FFB84D] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Save Shange
            </button>
          </div>
        </form>
      </main>

      {/* Footer */}
      <AdminProfileFooter />
    </div>
  );
}
