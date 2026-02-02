"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const InstructorProfileFooter: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-[#FF8A00] to-[#FFB84D] text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-8">
        {/* Contact Info Top */}
        <div className="flex items-center justify-center gap-8 mb-8">
          <div className="flex items-center gap-2">
            <div className="bg-white/20 p-2 rounded-full">
              <FaPhone className="text-lg" />
            </div>
            <div>
              <span className="text-sm font-semibold">Phone:</span>
              <span className="text-sm ml-1 opacity-90">Call +764 000 532</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-white/20 p-2 rounded-full">
              <FaEnvelope className="text-lg" />
            </div>
            <div>
              <span className="text-sm font-semibold">Email:</span>
              <span className="text-sm ml-1 opacity-90">info@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/Home in/Frame 1984077959.png"
                alt="LARA Logo"
                width={50}
                height={50}
                className="rounded-lg"
              />
              <h3 className="text-2xl font-bold">LARA</h3>
            </div>
            <p className="text-sm leading-relaxed opacity-90">
              An innovative educational platform offering smart courses to enhance your skills
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-orange-200">•</span>
                <Link href="/dashboard" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-200">•</span>
                <Link href="/courses" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                  Courses
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-200">•</span>
                <Link href="/about" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                  About LARA
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-200">•</span>
                <Link href="#" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                  Instructors
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold mb-4">Support</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-orange-200">•</span>
                <Link href="#" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                  Contact Us
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-200">•</span>
                <Link href="#" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                  FAQ
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-200">•</span>
                <Link href="#" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                  Privacy
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-200">•</span>
                <Link href="#" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* Your Account */}
          <div>
            <h4 className="text-lg font-bold mb-4">Your Account</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-orange-200">•</span>
                <Link href="/instructor-profile" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                  Profile
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-200">•</span>
                <Link href="#" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                  Settings
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-200">•</span>
                <Link href="/login" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-10 pt-6 border-t border-white/30">
          <p className="text-sm opacity-90">© 2025 LARA — All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default InstructorProfileFooter;
