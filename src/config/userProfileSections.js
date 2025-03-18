import {
  AccountSection,
  ProfileSection,
  BanksCardsSection,
  ChangePasswordSection,
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
  account: {
    id: "account",
    label: "Account",
    component: AccountSection,
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
