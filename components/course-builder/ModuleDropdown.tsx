"use client";

import React from "react";

interface ModuleDropdownProps {
  selectedModule: string;
  modules: string[];
  onChange: (module: string) => void;
}

const ModuleDropdown: React.FC<ModuleDropdownProps> = ({ selectedModule, modules, onChange }) => {
  return (
    <div className="mb-6 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
      <select
        value={selectedModule}
        onChange={(e) => onChange(e.target.value)}
        className="w-80 p-3 rounded-lg border-2 border-gray-300 bg-white text-gray-800 font-medium focus:border-orange-400 focus:outline-none cursor-pointer hover:border-orange-300 transition-colors"
      >
        {modules.map((module) => (
          <option key={module} value={module}>
            {module}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ModuleDropdown;
