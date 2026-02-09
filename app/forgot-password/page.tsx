"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaEnvelope, FaArrowLeft, FaCheckCircle } from "react-icons/fa";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-5 overflow-hidden" 
      style={{ background: "radial-gradient(circle at top, #ffbe8a, #ff9e45, #ffa85b)" }}
    >
      {/* Animated Background Shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-orange-300/20 rounded-full blur-xl animate-bounce" style={{ animationDuration: "3s" }} />
      <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-yellow-300/20 rounded-full blur-xl animate-ping" style={{ animationDuration: "4s" }} />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      
      <div className="w-full max-w-[1000px] animate-fadeIn">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row transform hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)] transition-shadow duration-500">
          {/* Left Side - Form */}
          <div className="flex-1 px-8 md:px-12 py-10 relative flex flex-col justify-center items-center min-h-[500px]">
            {/* Back Button */}
            <Link
              href="/login"
              className="absolute top-6 left-6 flex items-center gap-2 text-gray-500 hover:text-orange-500 transition-all duration-300 group animate-slideDown"
            >
              <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="text-sm font-medium">Back</span>
            </Link>

            <div className="w-full max-w-md">
              {!isSubmitted ? (
                <>
                  {/* Header */}
                  <div className="text-center mb-8 animate-slideDown" style={{ animationDelay: "0.1s" }}>
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">Forgot Password?</h2>
                    <p className="text-gray-500 text-sm font-medium">
                      Enter your email and we&apos;ll send you a reset link
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Email Input */}
                    <div className="relative animate-slideUp" style={{ animationDelay: "0.2s" }}>
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                        <FaEnvelope />
                      </div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-gray-200 bg-gray-50 text-sm focus:outline-none focus:border-orange-400 focus:bg-white focus:shadow-lg focus:scale-[1.02] transition-all duration-300"
                        placeholder="Email Address"
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2 animate-slideUp" style={{ animationDelay: "0.3s" }}>
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-4 bg-gradient-to-r from-[#ff9c30] to-[#ffb347] text-white rounded-full font-semibold text-base hover:from-[#e88b20] hover:to-[#ffa030] hover:scale-[1.02] hover:shadow-xl active:scale-[0.98] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 relative overflow-hidden group"
                      >
                        {/* Button Shine Effect */}
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                        
                        {isLoading ? (
                          <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          "Send Reset Link"
                        )}
                      </button>
                    </div>
                  </form>

                  {/* Login Link */}
                  <div className="text-center mt-8 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
                    <p className="text-gray-500 text-sm">
                      Remember your password?{" "}
                      <Link 
                        href="/login" 
                        className="text-orange-500 font-semibold hover:text-orange-600 hover:underline transition-all duration-300"
                      >
                        Log In
                      </Link>
                    </p>
                  </div>
                </>
              ) : (
                /* Success State */
                <div className="text-center animate-scaleIn">
                  <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center animate-bounce" style={{ animationDuration: "2s" }}>
                    <FaCheckCircle className="text-4xl text-green-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Check Your Email!</h2>
                  <p className="text-gray-500 text-sm mb-6">
                    We&apos;ve sent a password reset link to<br />
                    <span className="font-semibold text-gray-700">{email}</span>
                  </p>
                  <Link
                    href="/login"
                    className="inline-block px-8 py-3 bg-gradient-to-r from-[#ff9c30] to-[#ffb347] text-white rounded-full font-semibold text-sm hover:from-[#e88b20] hover:to-[#ffa030] hover:scale-105 hover:shadow-xl transition-all duration-300"
                  >
                    Back to Login
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="hidden md:block md:flex-[1] relative h-[500px] md:h-auto overflow-hidden group">
            <Image
              src="/images/auth/login-bg.jpeg.png"
              alt="Reset Password"
              fill
              className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
              priority
            />
            {/* Orange Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/70 via-orange-500/60 to-amber-400/70 mix-blend-multiply" />
            
            {/* Animated Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            
            {/* Decorative Elements */}
            <div className="absolute top-10 right-10 w-24 h-24 border-2 border-white/30 rounded-full animate-pulse" />
            <div className="absolute top-20 right-20 w-16 h-16 border-2 border-white/20 rounded-full animate-ping" style={{ animationDuration: "3s" }} />
            
            {/* Floating Text on Image */}
            <div className="absolute bottom-10 left-8 right-8 text-white animate-slideUp" style={{ animationDelay: "0.5s" }}>
              <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">Reset Your Password</h3>
              <p className="text-sm opacity-90 drop-shadow-md">Continue your learning journey with LARA</p>
            </div>

            {/* Animated Lines */}
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
            <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" style={{ animationDelay: "0.5s" }} />
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        .animate-slideDown {
          animation: slideDown 0.6s ease-out forwards;
        }
        
        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
