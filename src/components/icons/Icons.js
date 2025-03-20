import {
  FaTag,
  FaGift,
  FaClock,
  FaMinus,
  FaPlus,
  FaHeart,
  FaGoogle,
  FaFacebook,
  FaGithub,
  FaRegEyeSlash,
} from "react-icons/fa";
import { HiOutlineUserCircle, HiOutlineShoppingBag } from "react-icons/hi2";
import { LuMenu } from "react-icons/lu";
import { RiBox3Line } from "react-icons/ri";
import { CiLock } from "react-icons/ci";

import {
  MdOutlineEmail,
  MdLockOutline,
  MdOutlineChevronRight,
} from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import {
  IoCallOutline,
  IoNotificationsOutline,
  IoSettingsOutline,
  IoHelpCircleOutline,
  IoLogOutOutline,
  IoChevronDownOutline,
  IoCheckmarkCircle,
} from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { TbCategoryMinus } from "react-icons/tb";
import { LuTriangleAlert } from "react-icons/lu";

// Icon Groups
export const Home = {
  Tag: FaTag,
  Gift: FaGift,
  Clock: FaClock,
  RightArrow: MdOutlineChevronRight,
};

export const Navbar = {
  Menu: LuMenu,
  Home: GoHome,
  Category: TbCategoryMinus,
  Products: RiBox3Line,
  Contact: IoCallOutline,
  Close: IoMdClose,
  User: HiOutlineUserCircle,
  Bell: IoNotificationsOutline,
  Setting: IoSettingsOutline,
  Help: IoHelpCircleOutline,
  Logout: IoLogOutOutline,
  Bag: HiOutlineShoppingBag,
};

export const Product = {
  Minus: FaMinus,
  Plus: FaPlus,
  Heart: FaHeart,
  Bag: HiOutlineShoppingBag,
};

export const Cart = {
  Bag: HiOutlineShoppingBag,
  Minus: FaMinus,
  Plus: FaPlus,
  Close: IoMdClose,
};

export const Auth = {
  Email: MdOutlineEmail,
  Password: MdLockOutline,
  Google: FaGoogle,
  Facebook: FaFacebook,
  Github: FaGithub,
};

export const UserProfile = {
  ArrowDown: IoChevronDownOutline,
  Google: FaGoogle,
  Facebook: FaFacebook,
  Github: FaGithub,
  Lock: CiLock,
  Verified: IoCheckmarkCircle,
  Eye: FaRegEyeSlash,
  Alert: LuTriangleAlert,
};
