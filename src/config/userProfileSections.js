import {
  Account,
  Profile,
  CardAndBank,
  OrderHistory,
  NotificationsSection,
} from "../components/user";

export const sections = {
  profile: {
    id: "profile",
    label: "Profile",
    component: Profile,
  },
  account: {
    id: "account",
    label: "Account",
    component: Account,
  },
  payment: {
    id: "payment",
    label: "Cards & Bank Accounts",
    component: CardAndBank,
  },
  orderHistory: {
    id: "orderHistory",
    label: "Order History",
    component: OrderHistory,
  },
  notifications: {
    id: "notifications",
    label: "Notifications",
    component: NotificationsSection,
  },
};
