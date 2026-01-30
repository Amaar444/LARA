"use client";

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
    <div 
      className="min-h-screen flex items-center justify-center p-8"
      style={{ background: "linear-gradient(to right, #ffeaa0, #ffc47b)" }}
    >
      <div className="max-w-[900px] w-full flex flex-col md:flex-row gap-10">
          
          {/* LEFT CARD - FORM */}
          <div className="bg-white flex-1 px-9 py-10 rounded shadow-md">
            <h1 className="text-center text-[28px] font-bold mb-1.5">Pay now</h1>
            <p className="text-center text-[13px] text-gray-600 mb-8">
              Enter your payment information to complete your subscription
            </p>

            <form onSubmit={handleSubmit}>
              <label className="block text-sm font-semibold mb-1.5">Full Name:</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full rounded-2xl border border-gray-300 outline-none px-3.5 py-2.5 text-sm bg-[#fdfdfd] mb-4"
                required
              />

              <label className="block text-sm font-semibold mb-1.5">Email Address:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-2xl border border-gray-300 outline-none px-3.5 py-2.5 text-sm bg-[#fdfdfd] mb-4"
                required
              />

              <label className="block text-sm font-semibold mb-1.5">Credit Card Number:</label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                className="w-full rounded-2xl border border-gray-300 outline-none px-3.5 py-2.5 text-sm bg-[#fdfdfd] mb-4"
                required
              />

              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-semibold mb-1.5">Expiry Date (MM/YY):</label>
                  <input
                    type="text"
                    name="expiry"
                    value={formData.expiry}
                    onChange={handleChange}
                    placeholder="MM/YY"
                    className="w-full rounded-2xl border border-gray-300 outline-none px-3.5 py-2.5 text-sm bg-[#fdfdfd] mb-4"
                    required
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-semibold mb-1.5">cvv:</label>
                  <input
                    type="password"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-gray-300 outline-none px-3.5 py-2.5 text-sm bg-[#fdfdfd] mb-4"
                    required
                  />
                </div>
              </div>

              <label className="block text-sm font-semibold mb-1.5">Amount :</label>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                step="0.01"
                className="w-full rounded-2xl border border-gray-300 outline-none px-3.5 py-2.5 text-sm bg-[#fdfdfd] mb-4"
                required
              />

              <button
                type="submit"
                className="block mx-auto mt-6 px-10 py-2.5 rounded-3xl border-none bg-[#ff9b2a] text-white text-base font-semibold cursor-pointer hover:bg-[#f38b12] transition-colors"
              >
                Pay now
              </button>
            </form>
          </div>

          {/* RIGHT CARD - SUMMARY */}
          <div className="bg-white flex-1 px-9 py-10 rounded shadow-md">
            <h2 className="text-center text-2xl font-bold mb-2.5">Design System Course</h2>
            <p className="text-sm mb-7 w-full text-center">
              <span className="font-bold">Instructor:</span>{" "}
              <span>Islam Hefne</span>
            </p>

            <div className="flex justify-between text-base mb-3.5">
              <span className="font-bold">Base price</span>
              <span className="text-[#179b24] font-bold">19.99$</span>
            </div>

            <div className="flex justify-between text-base mb-3.5">
              <span className="font-bold">opponent</span>
              <span className="text-[#179b24] font-bold">0.00-$</span>
            </div>

            <hr className="border-none border-t border-[#bfbfbf] my-5" />

            <div className="flex justify-between text-base mb-4">
              <span className="font-bold">Total</span>
              <span className="text-[#179b24] font-bold">19.99$</span>
            </div>

            <p className="text-sm text-gray-800">Need help? Contact us</p>
          </div>

        </div>
      </div>
  );
}
