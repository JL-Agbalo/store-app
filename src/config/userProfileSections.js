import {
  AccountSection,
  ProfileSection,
  BanksCardsSection,
  AddressesSection,
  OrdersSection,
  NotificationsSection,
} from "../components/user";

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
  account: {
    id: "account",
    label: "Account",
    component: AccountSection,
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
