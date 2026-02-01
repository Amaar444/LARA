"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    role: "",
    password: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect based on role selection
    if (formData.role === "instructor") {
      window.location.href = "/dashboard";
    } else {
      window.location.href = "/my-courses";
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-5" 
      style={{ background: "linear-gradient(to bottom, #f7b165, #f7d9a1)" }}
    >
      <div className="w-full max-w-[1100px]">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          {/* Left Side - Form */}
          <div className="flex-1 px-8 md:px-12 py-10 relative flex flex-col justify-center items-center min-h-[500px]">
            <div className="w-full max-w-md">
              <h2 className="text-[26px] font-bold text-gray-900 mb-1.5 text-center">Create Your Account</h2>
              <p className="text-gray-600 text-center text-sm font-medium mb-6 leading-relaxed">Unlock Knowledge And Grow Your Skills Today!</p>
            </div>

          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-5">
            {/* Full Name + Phone */}
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-5 py-3 rounded-full border border-gray-300 bg-[#fafafa] text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Full Name"
                required
              />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-5 py-3 rounded-full border border-gray-300 bg-[#fafafa] text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Phone"
                required
              />
            </div>

            {/* Role Selection */}
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-5 py-3 rounded-full border border-gray-300 bg-[#fafafa] text-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            >
              <option value="">Role Selection</option>
              <option value="student" className="text-gray-700">Student</option>
              <option value="instructor" className="text-gray-700">Instructor</option>
            </select>

            {/* Password + Email */}
            <div className="grid grid-cols-2 gap-4">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-5 py-3 rounded-full border border-gray-300 bg-[#fafafa] text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Password"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-5 py-3 rounded-full border border-gray-300 bg-[#fafafa] text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Email"
                required
              />
            </div>

            <button
              type="submit"
              className="w-[150px] h-[42px] mx-auto block bg-[#e79c3c] text-white font-semibold rounded-full hover:bg-[#d68524] transition-colors mt-4 text-[15px]"
            >
              Sign up
            </button>
          </form>

          <div className="w-full max-w-md">
            <p className="mt-4 text-center text-sm text-gray-700">
              Already have account?{" "}
              <Link href="/login" className="text-[#e79c3c] font-medium hover:underline">
                Login here
              </Link>
            </p>

            <div className="mt-6">
              <div className="flex items-center w-full my-6 text-xs tracking-wider text-gray-500 font-medium">
                <div className="flex-1 h-px bg-gray-300"></div>
                <span className="mx-2.5 uppercase">or sign in with</span>
                <div className="flex-1 h-px bg-gray-300"></div>
              </div>

              <div className="flex justify-center gap-3 mb-4">
                <button className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full border-2 border-[#e2dbd5] bg-transparent text-[13px] text-[#d2cbc4] hover:border-gray-400 transition-colors">
                  <Image src="/images/auth/face.png" alt="Facebook" width={18} height={18} />
                  Facebook
                </button>
                <button className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full border-2 border-[#e2dbd5] bg-transparent text-[13px] text-[#d2cbc4] hover:border-gray-400 transition-colors">
                  <Image src="/images/auth/google.png" alt="Google" width={18} height={18} />
                  Google
                </button>
              </div>
            </div>

            <div className="text-sm text-gray-600">🌐 EN</div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="hidden md:block md:flex-[1.1] relative h-[500px] md:h-auto">
          <Image
            src="/images/auth/create-bg.jpeg.png"
            alt="Student watching online course"
            fill
            className="object-cover"
          />
        </div>
        </div>
      </div>
    </div>
  );
}
