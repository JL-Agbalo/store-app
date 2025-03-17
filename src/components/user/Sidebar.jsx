import React from "react";

function Sidebar({ sections, activeSection, setActiveSection }) {
  return (
    <div className="w-64 h-full bg-white rounded-lg shadow-sm">
      <nav className="p-4">
        <ul className="space-y-2">
          {Object.values(sections).map(({ id, label }) => (
            <li key={id}>
              <button
                onClick={() => setActiveSection(id)}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  activeSection === id
                    ? "bg-black text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
