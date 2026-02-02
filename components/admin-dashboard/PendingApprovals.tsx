"use client";

import React from "react";
import { FaExclamationCircle } from "react-icons/fa";

interface ApprovalItem {
  id: number;
  text: string;
  type: "instructor" | "course";
}

interface PendingApprovalsProps {
  approvals: ApprovalItem[];
}

const PendingApprovals: React.FC<PendingApprovalsProps> = ({ approvals }) => {
  return (
    <div className="bg-orange-50 rounded-2xl p-5 shadow-lg animate-slideUp" style={{ animationDelay: "0.3s" }}>
      <div className="flex items-center gap-2 mb-4">
        <FaExclamationCircle className="text-red-500 text-xl" />
        <h3 className="text-lg font-bold text-gray-800">Pending Approvals</h3>
      </div>
      <div className="space-y-3">
        {approvals.map((item, index) => (
          <div 
            key={item.id}
            className={`p-3 rounded-xl text-sm font-medium transition-all hover:scale-[1.02] cursor-pointer animate-fadeIn ${
              item.type === "instructor" 
                ? "bg-orange-200 text-orange-800 hover:bg-orange-300" 
                : "bg-orange-100 text-orange-700 hover:bg-orange-200"
            }`}
            style={{ animationDelay: `${0.1 * index}s` }}
          >
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PendingApprovals;
