"use client";

import Image from "next/image";
import Link from "next/link";

const InstructorHomeFooter = () => {
  return (
    <footer className="px-10 py-8 mt-5 relative overflow-hidden" style={{ background: "linear-gradient(to right, #ffb45a, #ffe6a5)" }}>
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <Image src="/images/my-courses/logo.png" alt="LARA" width={70} height={70} className="hover:scale-105 transition-transform duration-300 rounded-lg" />
        </div>
        
        {/* Social Icons */}
        <div className="flex gap-3">
          <div className="social-btn w-11 h-11 bg-[#d98a47] rounded-full flex items-center justify-center">
            <span className="text-white font-bold">f</span>
          </div>
          <div className="social-btn w-11 h-11 bg-[#d98a47] rounded-full flex items-center justify-center">
            <span className="text-white font-bold">𝕏</span>
          </div>
          <div className="social-btn w-11 h-11 bg-[#d98a47] rounded-full flex items-center justify-center">
            <span className="text-white font-bold">in</span>
          </div>
          <div className="social-btn w-11 h-11 bg-[#d98a47] rounded-full flex items-center justify-center">
            <span className="text-white">📷</span>
          </div>
          <div className="social-btn w-11 h-11 bg-[#d98a47] rounded-full flex items-center justify-center">
            <span className="text-white">▶️</span>
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8">
        {/* Quick Links */}
        <div className="footer-card rounded-2xl p-5 slide-in" style={{ animationDelay: '0.2s', opacity: 0 }}>
          <h4 className="text-[#8B4513] font-bold text-lg mb-4 flex items-center gap-2">
            <span className="text-xl">🚀</span> Quick Links
          </h4>
          <ul className="space-y-2 text-sm text-[#5D4E37]">
            <li className="footer-link"><Link href="/instructor-home">Home</Link></li>
            <li className="footer-link"><Link href="/courses-management">All Courses</Link></li>
            <li className="footer-link"><Link href="#">Instructors</Link></li>
            <li className="footer-link"><Link href="/about">About Us</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-card rounded-2xl p-5 slide-in" style={{ animationDelay: '0.3s', opacity: 0 }}>
          <h4 className="text-[#8B4513] font-bold text-lg mb-4 flex items-center gap-2">
            <span className="text-xl">💬</span> Support
          </h4>
          <ul className="space-y-2 text-sm text-[#5D4E37]">
            <li className="footer-link"><Link href="#">Help Center</Link></li>
            <li className="footer-link"><Link href="#">Contact Us</Link></li>
            <li className="footer-link"><Link href="#">Privacy Policy</Link></li>
            <li className="footer-link"><Link href="#">Terms of Use</Link></li>
          </ul>
        </div>

        {/* Account */}
        <div className="footer-card rounded-2xl p-5 slide-in" style={{ animationDelay: '0.4s', opacity: 0 }}>
          <h4 className="text-[#8B4513] font-bold text-lg mb-4 flex items-center gap-2">
            <span className="text-xl">👤</span> Account
          </h4>
          <ul className="space-y-2 text-sm text-[#5D4E37]">
            <li className="footer-link"><Link href="/instructor-profile">My Profile</Link></li>
            <li className="footer-link"><Link href="/courses-management">My Courses</Link></li>
            <li className="footer-link"><Link href="#">Settings</Link></li>
            <li className="footer-link"><Link href="/login">Sign Out</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-card rounded-2xl p-5 slide-in" style={{ animationDelay: '0.5s', opacity: 0 }}>
          <h4 className="text-[#8B4513] font-bold text-lg mb-4 flex items-center gap-2">
            <span className="text-xl">📞</span> Contact
          </h4>
          <div className="space-y-3 text-sm text-[#5D4E37]">
            <div className="flex items-center gap-2">
              <span className="text-lg">📱</span>
              <span>+123 456 789</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg">✉️</span>
              <span>info@lara.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/30 pt-5 flex flex-col md:flex-row justify-between items-center gap-3 fade-up" style={{ animationDelay: '0.6s', opacity: 0 }}>
        <p className="text-sm text-[#5D4E37] font-medium">© 2025 LARA Platform - All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default InstructorHomeFooter;
