"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = "/my-courses";
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-5" 
      style={{ background: "radial-gradient(circle at top, #ffbe8a, #ff9e45, #ffa85b)" }}
    >
      <div className="w-full max-w-[1100px]">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          {/* Left Side - Form */}
          <div className="flex-1 px-8 md:px-12 py-10 relative flex flex-col justify-center items-center min-h-[500px]">
            {/* Sign Up Button - Top Right */}
            <Link
              href="/signup"
              className="absolute top-6 right-6 px-5 py-1.5 rounded-full border-2 border-[#ff9c30] text-[#ff9c30] text-xs font-semibold hover:bg-[#ff9c30] hover:text-white transition-colors"
            >
              Sign Up
            </Link>

            <div className="w-full max-w-md mt-8">
              <h2 className="text-[26px] font-bold text-gray-900 mb-1.5 text-center">Welcome Back!</h2>
              <p className="text-gray-600 text-sm mb-6 text-center font-medium leading-relaxed">
                Login or sign up to the best courses
              </p>

              <form onSubmit={handleSubmit} className="mb-6">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-3 my-2 rounded-full border border-gray-300 bg-[#fafafa] text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 text-left"
                  placeholder="Username"
                  required
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 my-2 rounded-full border border-gray-300 bg-[#fafafa] text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 text-left"
                  placeholder="Password"
                  required
                />

                <Link href="#" className="block w-full text-right text-xs text-gray-600 underline mt-1.5 mb-4">
                  Forgot your password?
                </Link>

                <button
                  type="submit"
                  className="w-full max-w-[200px] mx-auto block py-3 bg-[#ff9c30] text-white rounded-full font-semibold text-[15px] hover:bg-[#e88b20] transition-colors mt-4"
                >
                  Log In
                </button>
              </form>

              <div className="mt-8">
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
            </div>

            <div className="absolute bottom-5 left-5 text-sm text-gray-600">🌐 EN</div>
          </div>

          {/* Right Side - Image */}
          <div className="hidden md:block md:flex-[1.1] relative h-[500px] md:h-auto">
            <Image
              src="/images/auth/login-bg.jpeg.png"
              alt="Login Background"
              fill
              className="object-cover object-center"
              style={{ filter: "brightness(0.65)" }}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
