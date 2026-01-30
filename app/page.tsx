import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full min-h-screen m-0 p-[35px_60px_40px] bg-gradient-to-r from-white via-white to-[#fbb37b] relative overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <Image src="/images/logo.jpg" alt="LARA Logo" width={65} height={65} className="rounded-full" />
        </div>

        <nav className="flex gap-6 text-sm">
          <Link href="/" className="text-gray-800 font-semibold border-b-2 border-gray-800 pb-1">
            Home
          </Link>
          <Link href="/courses" className="text-gray-800 hover:font-semibold">
            Recommended Courses
          </Link>
          <Link href="/course-player" className="text-gray-800 hover:font-semibold">
            Course Player
          </Link>
          <Link href="/dashboard" className="text-gray-800 hover:font-semibold">
            Dashboard
          </Link>
          <Link href="/about" className="text-gray-800 hover:font-semibold">
            About
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/login" className="text-gray-800 text-sm">
            Log In
          </Link>
          <Link
            href="/signup"
            className="px-5 py-2 rounded-full bg-[#ff9c30] text-white text-sm font-semibold hover:bg-[#ff8b2b] transition-colors"
          >
            Join Now
          </Link>
        </div>
      </header>

      {/* Hero Content */}
      <section className="flex justify-between items-center">
        <div className="w-2/5 flex justify-center items-center">
          <div className="ml-5">
            <h1 className="text-5xl font-bold max-w-md mb-6">
              Learn smart, start your future here!
            </h1>
            <p className="text-sm font-medium mb-10 max-w-md text-gray-700">
              A smart educational platform that combines professional teachers
              and modern technologies for easy and interactive learning.
            </p>
            <Link
              href="/login"
              className="inline-flex items-center justify-center w-48 h-14 bg-[#e77f0f] text-white rounded-full text-base font-semibold hover:bg-[#d67010] transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>

        <div className="w-3/5 flex justify-start">
          <Image
            src="/images/hero-students.jpg.png"
            alt="Students learning"
            width={600}
            height={500}
            className="w-4/5"
            priority
          />
        </div>
      </section>

      {/* Social Icons */}
      <div className="flex justify-end mt-16 gap-2">
        <Link href="#" className="hover:opacity-80">
          <Image src="/images/facebook.jpg" alt="Facebook" width={24} height={24} className="rounded-full border border-gray-400" />
        </Link>
        <Link href="#" className="hover:opacity-80">
          <Image src="/images/whtas.jpg" alt="WhatsApp" width={24} height={24} className="rounded-full border border-gray-400" />
        </Link>
        <Link href="#" className="hover:opacity-80">
          <Image src="/images/insta.jpg" alt="Instagram" width={24} height={24} className="rounded-full border border-gray-400" />
        </Link>
        <Link href="#" className="hover:opacity-80">
          <Image src="/images/twitter.jpg" alt="Twitter" width={24} height={24} className="rounded-full border border-gray-400" />
        </Link>
      </div>

      {/* Community Box */}
      <div className="flex items-center gap-3 mt-8 ml-[350px]">
        <div className="flex">
          <Image src="/images/comm.jpg" alt="Community" width={40} height={35} className="rounded-full border-2 border-white" />
        </div>
        <span className="text-xs text-gray-700">
          Join our community of<br />1200+ Students
        </span>
      </div>
    </main>
  );
}
