"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import {
  InstructorProfileNavbar,
  ProfileImage,
  ProfileField,
  ProfileBio,
  PasswordField,
  InstructorProfileFooter,
} from "@/components/instructor-profile";
import { defaultInstructorProfile } from "@/data/instructorProfile";

export default function InstructorProfile() {
  const [firstName, setFirstName] = useState(defaultInstructorProfile.firstName);
  const [lastName, setLastName] = useState(defaultInstructorProfile.lastName);
  const [email, setEmail] = useState(defaultInstructorProfile.email);
  const [phone, setPhone] = useState(defaultInstructorProfile.phone);
  const [bio, setBio] = useState(defaultInstructorProfile.bio);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSaveChanges = () => {
    // Validate fields
    if (!firstName || !lastName || !email) {
      alert("Please fill in all required fields");
      return;
    }

    // TODO: Implement save logic
    console.log("Saving profile:", {
      firstName,
      lastName,
      email,
      phone,
      bio,
      currentPassword: currentPassword ? "****" : "",
      newPassword: newPassword ? "****" : "",
    });

    alert("Profile updated successfully!");
  };

  const handleImageChange = () => {
    // TODO: Implement image upload
    console.log("Change profile image");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFD9B8] to-[#FFF7E6]">
      {/* Navigation Bar */}
      <InstructorProfileNavbar />

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-6 py-8">
        {/* Back Button */}
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 text-gray-800 hover:text-orange-600 transition-colors mb-6 animate-fadeIn"
        >
          <FaArrowLeft />
          <span className="font-medium">Back</span>
        </Link>

        {/* Profile Form */}
        <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
          {/* Profile Image */}
          <ProfileImage
            imageUrl={defaultInstructorProfile.imageUrl}
            onImageChange={handleImageChange}
          />

          {/* Form Fields */}
          <div className="space-y-5">
            {/* Name Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <ProfileField
                label="First Name"
                value={firstName}
                onChange={setFirstName}
                placeholder="Enter first name"
                delay={0.1}
              />
              <ProfileField
                label="Last Name"
                value={lastName}
                onChange={setLastName}
                placeholder="Enter last name"
                delay={0.15}
              />
            </div>

            {/* Email & Phone Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <ProfileField
                label="Email"
                value={email}
                onChange={setEmail}
                type="email"
                placeholder="Enter email"
                delay={0.2}
              />
              <ProfileField
                label="Phone"
                value={phone}
                onChange={setPhone}
                type="tel"
                placeholder="Enter phone number"
                delay={0.25}
              />
            </div>

            {/* Bio */}
            <ProfileBio
              value={bio}
              onChange={setBio}
              delay={0.3}
            />

            {/* Password Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <PasswordField
                label="Current Password"
                value={currentPassword}
                onChange={setCurrentPassword}
                placeholder="*****"
                delay={0.35}
              />
              <PasswordField
                label="New Password"
                value={newPassword}
                onChange={setNewPassword}
                placeholder="*****"
                delay={0.4}
              />
            </div>

            {/* Save Button */}
            <div 
              className="flex justify-end pt-4 animate-slideUp"
              style={{ animationDelay: "0.45s" }}
            >
              <button
                onClick={handleSaveChanges}
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#FF8A00] to-[#FFB84D] text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <InstructorProfileFooter />
    </div>
  );
}
