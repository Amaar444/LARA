"use client";

import React, { useState, useMemo } from "react";
import {
  AdminNavbar,
  UserFilters,
  UserTable,
  Pagination,
  CreateUserButton,
} from "@/components/admin-dashboard";
import { usersData } from "@/data/adminUsers";

const USERS_PER_PAGE = 7;

export default function AdminUsersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter users
  const filteredUsers = useMemo(() => {
    return usersData.filter((user) => {
      const matchesSearch =
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus =
        statusFilter === "all" || user.status.toLowerCase() === statusFilter.toLowerCase();
      return matchesSearch && matchesStatus;
    });
  }, [searchTerm, statusFilter]);

  // Paginate users
  const totalPages = Math.ceil(filteredUsers.length / USERS_PER_PAGE);
  const paginatedUsers = useMemo(() => {
    const start = (currentPage - 1) * USERS_PER_PAGE;
    return filteredUsers.slice(start, start + USERS_PER_PAGE);
  }, [filteredUsers, currentPage]);

  // Handlers
  const handleReset = () => {
    setSearchTerm("");
    setStatusFilter("all");
    setCurrentPage(1);
    setSelectedUsers([]);
  };

  const handleSelectUser = (id: number) => {
    setSelectedUsers((prev) =>
      prev.includes(id) ? prev.filter((uid) => uid !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedUsers.length === paginatedUsers.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(paginatedUsers.map((u) => u.id));
    }
  };

  const handleEdit = (id: number) => {
    console.log("Edit user:", id);
    // Add edit logic
  };

  const handleDelete = (id: number) => {
    console.log("Delete user:", id);
    // Add delete logic
  };

  const handleCreateUser = () => {
    console.log("Create new user");
    // Add create user logic
  };

  return (
    <div 
      className="min-h-screen"
      style={{ background: "linear-gradient(to bottom, #FFD4A8, #FFECD9)" }}
    >
      {/* Navigation */}
      <AdminNavbar activeTab="user-management" />

      {/* Main Content */}
      <main className="px-8 py-6 max-w-6xl mx-auto">
        {/* Header with Create Button */}
        <div className="flex justify-end mb-6">
          <CreateUserButton onClick={handleCreateUser} />
        </div>

        {/* Filters */}
        <UserFilters
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          statusFilter={statusFilter}
          onStatusFilterChange={setStatusFilter}
          onReset={handleReset}
        />

        {/* Users Table */}
        <UserTable
          users={paginatedUsers}
          selectedUsers={selectedUsers}
          onSelectUser={handleSelectUser}
          onSelectAll={handleSelectAll}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </main>
    </div>
  );
}
