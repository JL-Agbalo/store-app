import React, { useState } from "react";
import { UserProfile as Icons } from "../../components/icons/Icons";
import { Sidebar } from "../../components/user";
import { sections } from "../../config/userProfileSections";

function UserProfile() {
  const [activeSection, setActiveSection] = useState(Object.keys(sections)[0]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const ActiveComponent = sections[activeSection].component;

  // Group sidebar-related props
  const sidebarProps = {
    sections,
    activeSection,
    setActiveSection,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container max-w-7xl mx-auto py-8 px-4">
        {/* Mobile Menu Button */}
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center justify-between w-full p-4 bg-white rounded-lg shadow-sm"
          >
            <span className="font-medium">{sections[activeSection].label}</span>
            <Icons.ArrowDown
              className={`w-5 h-5 transition-transform ${
                isMobileMenuOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Hidden on mobile unless menu is open */}
          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } lg:block lg:w-64 z-10`}
          >
            <Sidebar {...sidebarProps} />
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-white rounded-lg shadow-sm">
            <ActiveComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
