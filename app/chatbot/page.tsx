"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ChatBotPage() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "HI Ammar 👋 I'M LARA, What can I help you with",
      isBot: true,
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSend = () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false,
    };

    setMessages([...messages, userMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        text: "Thanks for your question! I'm here to help you with your learning journey. How can I assist you today?",
        isBot: true,
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);

    setInputMessage("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center p-8">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl h-[700px] flex flex-col">
        {/* Header */}
        <header className="bg-gradient-to-r from-[#FFAE74] to-[#FFF4B7] p-6 rounded-t-2xl flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.jpg"
              alt="LARA Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div>
              <h2 className="font-bold text-lg text-gray-900">LARA Assistant</h2>
              <p className="text-sm text-gray-700">Online • Always here to help</p>
            </div>
          </div>
          <Link
            href="/dashboard"
            className="text-gray-700 hover:text-gray-900 text-2xl font-bold"
          >
            ✕
          </Link>
        </header>

        {/* Chat Messages */}
        <main className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
            >
              {message.isBot && (
                <div className="w-10 h-10 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full flex items-center justify-center text-xl mr-3">
                  🤖
                </div>
              )}
              <div
                className={`max-w-xs px-4 py-3 rounded-2xl ${
                  message.isBot
                    ? "bg-gray-100 text-gray-800"
                    : "bg-gradient-to-r from-[#FFAE74] to-[#FFF4B7] text-gray-900"
                }`}
              >
                {message.text}
              </div>
              {!message.isBot && (
                <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center text-xl ml-3">
                  👤
                </div>
              )}
            </div>
          ))}
        </main>

        {/* Input Bar */}
        <footer className="p-4 border-t border-gray-200">
          <div className="flex gap-3">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Write a message..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <button
              onClick={handleSend}
              className="w-12 h-12 bg-gradient-to-r from-[#FFAE74] to-[#FFF4B7] rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
            >
              <span className="text-2xl">➤</span>
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
