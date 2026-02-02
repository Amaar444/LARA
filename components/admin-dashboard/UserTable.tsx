"use client";

import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
  progress: number;
  status: "Active" | "Pending" | "Suspended";
}

interface UserTableProps {
  users: User[];
  selectedUsers: number[];
  onSelectUser: (id: number) => void;
  onSelectAll: () => void;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const UserTable: React.FC<UserTableProps> = ({
  users,
  selectedUsers,
  onSelectUser,
  onSelectAll,
  onEdit,
  onDelete,
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "text-green-600";
      case "Pending":
        return "text-orange-500";
      case "Suspended":
        return "text-red-500";
      default:
        return "text-gray-600";
    }
  };

  const allSelected = users.length > 0 && selectedUsers.length === users.length;

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-slideUp" style={{ animationDelay: "0.2s" }}>
      {/* Bulk Actions */}
      <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-4">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={allSelected}
            onChange={onSelectAll}
            className="w-4 h-4 rounded border-gray-300 text-orange-500 focus:ring-orange-400 cursor-pointer"
          />
        </label>
        <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-lg">
          {selectedUsers.length} Selected
        </span>
        {selectedUsers.length > 0 && (
          <button className="text-sm text-gray-700 bg-gray-100 px-4 py-1 rounded-lg hover:bg-gray-200 transition-colors">
            Delete
          </button>
        )}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="py-4 px-6 text-left text-sm font-semibold text-orange-600">ID</th>
              <th className="py-4 px-4 text-left text-sm font-semibold text-orange-600">Name</th>
              <th className="py-4 px-4 text-left text-sm font-semibold text-orange-600">Email</th>
              <th className="py-4 px-4 text-left text-sm font-semibold text-orange-600">progress</th>
              <th className="py-4 px-4 text-left text-sm font-semibold text-orange-600">Status</th>
              <th className="py-4 px-4 text-left text-sm font-semibold text-orange-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr 
                key={user.id}
                className="border-b border-gray-50 hover:bg-orange-50/30 transition-colors animate-fadeIn"
                style={{ animationDelay: `${0.05 * index}s` }}
              >
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={selectedUsers.includes(user.id)}
                      onChange={() => onSelectUser(user.id)}
                      className="w-4 h-4 rounded border-gray-300 text-orange-500 focus:ring-orange-400 cursor-pointer"
                    />
                    <span className="text-sm text-gray-800">{user.id}</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-sm text-gray-800 font-medium">{user.name}</td>
                <td className="py-4 px-4 text-sm text-gray-600">{user.email}</td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-24 h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-orange-400 to-orange-500 rounded-full transition-all duration-500"
                        style={{ width: `${user.progress}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-600 min-w-[40px]">{user.progress}%</span>
                  </div>
                </td>
                <td className={`py-4 px-4 text-sm font-medium ${getStatusColor(user.status)}`}>
                  {user.status}
                </td>
                <td className="py-4 px-4">
                  {user.status !== "Suspended" && user.status !== "Pending" ? (
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => onEdit(user.id)}
                        className="text-sm text-gray-700 hover:text-orange-600 transition-colors font-medium"
                      >
                        Edit
                      </button>
                      <button 
                        onClick={() => onDelete(user.id)}
                        className="text-sm text-red-500 hover:text-red-700 transition-colors font-medium"
                      >
                        Delete
                      </button>
                    </div>
                  ) : user.status === "Pending" ? (
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => onEdit(user.id)}
                        className="text-sm text-gray-700 hover:text-orange-600 transition-colors font-medium"
                      >
                        Edit
                      </button>
                      <button 
                        onClick={() => onDelete(user.id)}
                        className="text-sm text-red-500 hover:text-red-700 transition-colors font-medium"
                      >
                        Delete
                      </button>
                    </div>
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
