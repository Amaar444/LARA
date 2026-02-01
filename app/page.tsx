"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full min-h-screen m-0 p-[35px_60px_40px] bg-gradient-to-r from-white via-white to-[#fbb37b] relative overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-between mb-8 animate-fade-in">
        <div className="flex items-center gap-2 hover:scale-105 transition-transform">
          <Image src="/images/logo.jpg" alt="LARA Logo" width={65} height={65} className="rounded-full shadow-md" />
        </div>

        <nav className="flex gap-6 text-sm">
          <Link href="/" className="text-gray-800 font-semibold border-b-2 border-gray-800 pb-1 hover:text-orange-600 transition-colors">
            Home
          </Link>
          <Link href="/courses" className="text-gray-800 hover:font-semibold hover:text-orange-600 transition-colors">
            Recommended Courses
          </Link>
          <Link href="/course-player" className="text-gray-800 hover:font-semibold hover:text-orange-600 transition-colors">
            Course Player
          </Link>
          <Link href="/dashboard" className="text-gray-800 hover:font-semibold hover:text-orange-600 transition-colors">
            Dashboard
          </Link>
          <Link href="/about" className="text-gray-800 hover:font-semibold hover:text-orange-600 transition-colors">
            About
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/login" className="text-gray-800 text-sm hover:text-orange-600 transition-colors font-medium">
            Log In
          </Link>
          <Link
            href="/signup"
            className="px-5 py-2 rounded-full bg-[#ff9c30] text-white text-sm font-semibold hover:bg-[#ff8b2b] transition-all hover:scale-105 shadow-md hover:shadow-lg"
          >
            Join Now
          </Link>
        </div>
      </header>

      {/* Hero Content */}
      <section className="flex justify-between items-center">
        <div className="w-2/5 flex justify-center items-center animate-slide-in-left">
          <div className="ml-5">
            <h1 className="text-5xl font-bold max-w-md mb-6 animate-fade-in-up">
              Learn smart, start your future here!
            </h1>
            <p className="text-sm font-medium mb-10 max-w-md text-gray-700 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              A smart educational platform that combines professional teachers
              and modern technologies for easy and interactive learning.
            </p>
            <Link
              href="/login"
              className="inline-flex items-center justify-center w-48 h-14 bg-[#e77f0f] text-white rounded-full text-base font-semibold hover:bg-[#d67010] transition-all hover:scale-105 shadow-lg hover:shadow-xl animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              Get Started
            </Link>
          </div>
        </div>

        <div className="w-3/5 flex justify-start animate-slide-in-right">
          <Image
            src="/images/hero-students.jpg.png"
            alt="Students learning"
            width={600}
            height={500}
            className="w-4/5 hover:scale-105 transition-transform duration-500"
            priority
          />
        </div>
      </section>

      {/* Social Icons - Horizontal Layout */}
      <div className="absolute top-[520px] right-16 flex gap-3 animate-fade-in-right">
        <Link href="#" className="hover:scale-110 transition-transform hover:rotate-6">
          <Image src="/images/facebook.jpg" alt="Facebook" width={28} height={28} className="rounded-full border-2 border-gray-400 shadow-md hover:shadow-lg" />
        </Link>
        <Link href="#" className="hover:scale-110 transition-transform hover:rotate-6">
          <Image src="/images/whtas.jpg" alt="WhatsApp" width={28} height={28} className="rounded-full border-2 border-gray-400 shadow-md hover:shadow-lg" />
        </Link>
        <Link href="#" className="hover:scale-110 transition-transform hover:rotate-6">
          <Image src="/images/insta.jpg" alt="Instagram" width={28} height={28} className="rounded-full border-2 border-gray-400 shadow-md hover:shadow-lg" />
        </Link>
        <Link href="#" className="hover:scale-110 transition-transform hover:rotate-6">
          <Image src="/images/twitter.jpg" alt="Twitter" width={28} height={28} className="rounded-full border-2 border-gray-400 shadow-md hover:shadow-lg" />
        </Link>
      </div>

      {/* Community Box - Aligned with Social Icons */}
      <div className="absolute top-[520px] left-[350px] flex items-center gap-3 animate-bounce-slow">
        <div className="flex">
          <Image src="/images/comm.jpg" alt="Community" width={50} height={50} className="rounded-full border-4 border-white shadow-lg hover:scale-110 transition-transform" />
        </div>
        <span className="text-sm text-gray-800 font-semibold">
          Join our community of<br /><span className="text-orange-600 text-lg">1200+ Students</span>
        </span>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-in-left {
          from { 
            opacity: 0;
            transform: translateX(-50px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slide-in-right {
          from { 
            opacity: 0;
            transform: translateX(50px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fade-in-up {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-right {
          from { 
            opacity: 0;
            transform: translateX(30px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        .animate-slide-in-left {
          animation: slide-in-left 1s ease-out;
        }
        .animate-slide-in-right {
          animation: slide-in-right 1s ease-out;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-fade-in-right {
          animation: fade-in-right 1.2s ease-out;
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}
