import React, { useState } from "react";
import {
  Sidebar,
  ProfileSection,
  BanksCardsSection,
  ChangePasswordSection,
  AddressesSection,
  OrdersSection,
  NotificationsSection,
} from "../../components/user";

const sections = {
  profile: {
    id: "profile",
    label: "Profile",
    component: ProfileSection,
  },
  payment: {
    id: "payment",
    label: "Cards & Bank Accounts",
    component: BanksCardsSection,
  },
  password: {
    id: "password",
    label: "Change Password",
    component: ChangePasswordSection,
  },
  addresses: {
    id: "addresses",
    label: "Addresses",
    component: AddressesSection,
  },
  orders: {
    id: "orders",
    label: "Orders",
    component: OrdersSection,
  },
  notifications: {
    id: "notifications",
    label: "Notifications",
    component: NotificationsSection,
  },
};

function UserProfile() {
  const [activeSection, setActiveSection] = useState("profile");
  const ActiveComponent = sections[activeSection].component;

  // Group sidebar-related props
  const sidebarProps = {
    sections,
    activeSection,
    setActiveSection,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container max-w-7xl mx-auto py-8 px-4">
        <div className="flex gap-8">
          <Sidebar {...sidebarProps} />
          <div className="flex-1 bg-white rounded-lg shadow-sm">
            <ActiveComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
