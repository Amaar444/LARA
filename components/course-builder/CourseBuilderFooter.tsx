"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const CourseBuilderFooter: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-[#FF8A00] to-[#FFB84D] text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-8">
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
              <li>
                <Link href="/dashboard" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                  About LARA
                </Link>
              </li>
              <li>
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
              <li>
                <Link href="#" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                  Privacy
                </Link>
              </li>
              <li>
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
              <li>
                <Link href="/profile" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                  Profile
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                  Settings
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex items-center justify-between mt-8 pt-8 border-t border-white/30">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <FaPhone className="text-lg" />
              <span className="text-sm opacity-90">xxxxxxxxx</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-lg" />
              <span className="text-sm opacity-90">info@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6">
          <p className="text-sm opacity-80">© 2025 LARA — All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default CourseBuilderFooter;
