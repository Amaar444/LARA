"use client";

import { useState } from "react";
import Link from "next/link";
import { FaArrowLeft, FaCreditCard, FaLock, FaCheckCircle } from "react-icons/fa";

export default function PaymentPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    amount: "19.99",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Payment Successful! Redirecting to course...");
    window.location.href = "/course-player";
  };

  return (
    <div 
      className="min-h-screen p-8"
      style={{ background: "linear-gradient(to bottom, #FFE5B4, #FFF8E7, #FFFDF5)" }}
    >
      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .animate-fadeInLeft {
          animation: fadeInLeft 0.6s ease-out forwards;
        }
        .animate-fadeInRight {
          animation: fadeInRight 0.6s ease-out forwards;
        }
        .animate-slideDown {
          animation: slideDown 0.5s ease-out forwards;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .shimmer-btn {
          background: linear-gradient(90deg, #f29633 0%, #ffb347 50%, #f29633 100%);
          background-size: 200% 100%;
        }
        .shimmer-btn:hover {
          animation: shimmer 1.5s infinite;
        }
        .stagger-1 { animation-delay: 0.1s; opacity: 0; }
        .stagger-2 { animation-delay: 0.2s; opacity: 0; }
        .stagger-3 { animation-delay: 0.3s; opacity: 0; }
        .stagger-4 { animation-delay: 0.4s; opacity: 0; }
        input:focus {
          border-color: #f59e0b;
          box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.1);
        }
      `}</style>

      {/* Back Button */}
      <div className="max-w-5xl mx-auto mb-6 animate-slideDown">
        <Link 
          href="/course-detail-paid"
          className="inline-flex items-center gap-2 text-gray-700 hover:text-orange-600 transition-colors group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Course</span>
        </Link>
      </div>

      {/* Main Container */}
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* LEFT CARD - FORM */}
          <div className="bg-white/80 backdrop-blur-sm px-8 py-10 rounded-2xl shadow-xl border border-orange-100 animate-fadeInLeft stagger-1">
            <div className="flex items-center justify-center gap-2 mb-2">
              <FaCreditCard className="text-orange-500 text-2xl animate-float" />
              <h1 className="text-3xl font-bold text-gray-800">Pay now</h1>
            </div>
            <p className="text-center text-sm text-gray-600 mb-8">
              Enter your payment information to complete your subscription
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="animate-fadeInUp stagger-2">
                <label className="block text-sm font-semibold mb-2 text-gray-700">Full Name:</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full rounded-xl border-2 border-gray-300 outline-none px-4 py-3 text-sm bg-white transition-all duration-300"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="animate-fadeInUp stagger-3">
                <label className="block text-sm font-semibold mb-2 text-gray-700">Email Address:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border-2 border-gray-300 outline-none px-4 py-3 text-sm bg-white transition-all duration-300"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="animate-fadeInUp stagger-4">
                <label className="block text-sm font-semibold mb-2 text-gray-700">Credit Card Number:</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  className="w-full rounded-xl border-2 border-gray-300 outline-none px-4 py-3 text-sm bg-white transition-all duration-300"
                  placeholder="1234 5678 9012 3456"
                  maxLength={19}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="animate-fadeInUp stagger-5">
                  <label className="block text-sm font-semibold mb-2 text-gray-700">Expiry Date (MM/YY):</label>
                  <input
                    type="text"
                    name="expiry"
                    value={formData.expiry}
                    onChange={handleChange}
                    placeholder="MM/YY"
                    className="w-full rounded-xl border-2 border-gray-300 outline-none px-4 py-3 text-sm bg-white transition-all duration-300"
                    maxLength={5}
                    required
                  />
                </div>
                <div className="animate-fadeInUp stagger-5">
                  <label className="block text-sm font-semibold mb-2 text-gray-700">CVV:</label>
                  <input
                    type="password"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    className="w-full rounded-xl border-2 border-gray-300 outline-none px-4 py-3 text-sm bg-white transition-all duration-300"
                    placeholder="123"
                    maxLength={3}
                    required
                  />
                </div>
              </div>

              <div className="animate-fadeInUp stagger-6">
                <label className="block text-sm font-semibold mb-2 text-gray-700">Amount:</label>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  step="0.01"
                  className="w-full rounded-xl border-2 border-gray-300 outline-none px-4 py-3 text-sm bg-white transition-all duration-300"
                  readOnly
                />
              </div>

              <div className="pt-4 animate-fadeInUp stagger-7">
                <button
                  type="submit"
                  className="shimmer-btn w-full py-4 rounded-xl text-white text-lg font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FaLock className="text-sm" />
                  Pay now
                </button>
              </div>

              <p className="text-center text-xs text-gray-500 animate-fadeInUp stagger-8">
                🔒 Your payment information is secure and encrypted
              </p>
            </form>
          </div>

          {/* RIGHT CARD - SUMMARY */}
          <div className="bg-white/80 backdrop-blur-sm px-8 py-10 rounded-2xl shadow-xl border border-orange-100 animate-fadeInRight stagger-2">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Design System Course</h2>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Instructor:</span>{" "}
                <span className="text-orange-600 font-medium">Islam Hefne</span>
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center p-4 rounded-xl bg-gradient-to-r from-orange-50 to-amber-50 animate-fadeInUp stagger-3">
                <span className="font-semibold text-gray-700">Base price</span>
                <span className="text-green-600 font-bold text-lg">19.99$</span>
              </div>

              <div className="flex justify-between items-center p-4 rounded-xl bg-gradient-to-r from-orange-50 to-amber-50 animate-fadeInUp stagger-4">
                <span className="font-semibold text-gray-700">Discount</span>
                <span className="text-green-600 font-bold text-lg">0.00$</span>
              </div>
            </div>

            <hr className="border-t-2 border-orange-200 my-6 animate-fadeInUp stagger-5" />

            <div className="flex justify-between items-center p-5 rounded-xl bg-gradient-to-r from-orange-100 to-amber-100 mb-6 animate-fadeInUp stagger-6">
              <span className="font-bold text-gray-800 text-lg">Total</span>
              <span className="text-green-600 font-bold text-2xl">19.99$</span>
            </div>

            <div className="space-y-4 animate-fadeInUp stagger-7">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <FaCheckCircle className="text-green-500 text-lg" />
                <span>Lifetime access to course content</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <FaCheckCircle className="text-green-500 text-lg" />
                <span>Certificate of completion</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <FaCheckCircle className="text-green-500 text-lg" />
                <span>30-day money-back guarantee</span>
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-200 animate-fadeInUp stagger-8">
              <p className="text-sm text-gray-700 text-center">
                Need help? <Link href="/contact" className="text-orange-600 font-semibold hover:underline">Contact us</Link>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
