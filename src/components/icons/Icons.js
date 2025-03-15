// Icons Module
import {
  FaTag,
  FaGift,
  FaClock,
  FaShoppingCart,
  FaBell,
  FaUserCircle,
  FaMinus,
  FaPlus,
  FaHeart,
  FaGoogle,
  FaFacebook,
  FaGithub,
} from "react-icons/fa";
import { BsArrowRight, BsBox } from "react-icons/bs";
import { HiOutlineUserCircle, HiOutlineShoppingBag } from "react-icons/hi2";
import { LuMenu } from "react-icons/lu";
import { PiUserCircleLight } from "react-icons/pi";
import { CiSettings } from "react-icons/ci";
import { TbCategoryMinus } from "react-icons/tb";

import {
  MdEmail,
  MdOutlineEmail,
  MdLockOutline,
  MdPersonOutline,
  MdOutlineChevronRight,
  MdContactSupport,
} from "react-icons/md";
import {
  IoIosSettings,
  IoMdHelpCircle,
  IoMdCart,
  IoMdClose,
  IoIosArrowDown,
  IoIosNotificationsOutline,
  IoIosLogOut,
} from "react-icons/io";
import {
  IoLogOut,
  IoBagOutline,
  IoHelpCircleOutline,
  IoLogOutOutline,
  IoNotificationsOutline,
  IoSettingsOutline,
  IoCallOutline,
} from "react-icons/io5";
import { FaBagShopping } from "react-icons/fa6";
import { BiCategory } from "react-icons/bi";
import { FiHelpCircle } from "react-icons/fi";
import { GoHome } from "react-icons/go";

// Icon Groups
export const Home = {
  Tag: FaTag,
  Gift: FaGift,
  Clock: FaClock,
  ShoppingCart: FaShoppingCart,
  RightArrow: MdOutlineChevronRight,
};

export const Navbar = {
  Message: MdEmail,
  Notification: IoNotificationsOutline,
  Profile: FaUserCircle,
  Bag: HiOutlineShoppingBag,
  Setting: IoSettingsOutline,
  Help: IoHelpCircleOutline,
  Logout: IoLogOutOutline,
  ArrowDown: IoIosArrowDown,
  Menu: LuMenu,
  Home: GoHome,
  Category: TbCategoryMinus,
  Products: BsBox,
  Contact: IoCallOutline,
  Close: IoMdClose,
  User: HiOutlineUserCircle,
  Bell: IoNotificationsOutline,
};

export const Product = {
  Cart: IoMdCart,
  Minus: FaMinus,
  Plus: FaPlus,
  Heart: FaHeart,
  Bag: FaBagShopping,
};

export const Cart = {
  Bag: HiOutlineShoppingBag,
  Minus: FaMinus,
  Plus: FaPlus,
  Close: IoMdClose,
  RightArrow: BsArrowRight,
};

export const Auth = {
  Email: MdOutlineEmail,
  Password: MdLockOutline,
  User: MdPersonOutline,
  Google: FaGoogle,
  Facebook: FaFacebook,
  Github: FaGithub,
};
