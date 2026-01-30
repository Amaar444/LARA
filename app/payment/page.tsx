"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 flex items-center justify-center p-8">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-8">
        {/* Left Card - Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold mb-2 text-gray-900">Pay now</h1>
          <p className="text-gray-600 mb-8">
            Enter your payment information to complete your subscription
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name:
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address:
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Credit Card Number:
              </label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                placeholder="1234 5678 9012 3456"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expiry Date (MM/YY):
                </label>
                <input
                  type="text"
                  name="expiry"
                  value={formData.expiry}
                  onChange={handleChange}
                  placeholder="MM/YY"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  CVV:
                </label>
                <input
                  type="password"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  placeholder="123"
                  maxLength={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Amount:
              </label>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                step="0.01"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
                readOnly
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#FFAE74] to-[#FFF4B7] text-gray-800 font-semibold py-4 rounded-lg hover:opacity-90 transition-opacity mt-6"
            >
              Pay now
            </button>
          </form>
        </div>

        {/* Right Card - Summary */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Design System Course</h2>
          
          <div className="mb-4">
            <span className="text-sm text-gray-600">Instructor:</span>
            <span className="ml-2 text-gray-900 font-semibold">Islam Hefne</span>
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="text-gray-700">Base price</span>
              <span className="text-green-600 font-semibold">$19.99</span>
            </div>

            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="text-gray-700">Discount</span>
              <span className="text-green-600 font-semibold">-$0.00</span>
            </div>

            <div className="flex justify-between items-center py-4 border-t-2 border-gray-300 mt-4">
              <span className="text-xl font-bold text-gray-900">Total</span>
              <span className="text-2xl font-bold text-green-600">$19.99</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg p-6 mb-6">
            <h3 className="font-semibold mb-3 text-gray-900">What you'll get:</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span> Lifetime access to course
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span> Certificate of completion
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span> Access to all resources
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span> 24/7 support
              </li>
            </ul>
          </div>

          <p className="text-sm text-gray-600 text-center">
            Need help?{" "}
            <Link href="#" className="text-orange-600 hover:text-orange-700 font-semibold">
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
