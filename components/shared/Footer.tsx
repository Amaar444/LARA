"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
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
  );
};

export default Footer;
