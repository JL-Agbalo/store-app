import ProfileSection from "../sections/user/profile/ProfileSection";
import BanksCardsSection from "../sections/user/payment/PaymentSection";
import ChangePasswordSection from "../sections/user/password/PasswordSection";
import AddressesSection from "../sections/user/addresses/AddressesSection";
import OrdersSection from "../sections/user/orders/OrdersSection";
import NotificationsSection from "../sections/user/notifications/NotificationsSection";

export const sections = {
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
