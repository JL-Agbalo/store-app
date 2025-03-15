import { Navbar as Icons } from "../components/icons/Icons";

// Main navigation links (primary navigation)
export const mainNavLinks = [
  { to: "/", label: "Home", icon: Icons.Home },
  { to: "/products", label: "Products", icon: Icons.Products },
  { to: "/contact", label: "Contact Us", icon: Icons.Contact },
];

// User-related navigation links (secondary navigation)
export const userNavLinks = [
  { to: "/account", label: "My Account", icon: Icons.User },
  { to: "/orders", label: "My Orders", icon: Icons.Bag, hasNotification: true },
  {
    to: "/notifications",
    label: "Notifications",
    icon: Icons.Bell,
    hasNotification: true,
  },
  { to: "/settings", label: "Settings", icon: Icons.Setting },
  { to: "/help", label: "Help", icon: Icons.Help },
];
