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
import { BsArrowRight } from "react-icons/bs";
import { HiMiniHome } from "react-icons/hi2";
import {
  MdEmail,
  MdOutlineEmail,
  MdLockOutline,
  MdPersonOutline,
} from "react-icons/md";
import {
  IoIosSettings,
  IoMdHelpCircle,
  IoMdCart,
  IoMdClose,
} from "react-icons/io";
import { IoLogOut, IoBagOutline } from "react-icons/io5";
import { FaBagShopping } from "react-icons/fa6";

export const Home = {
  Tag: FaTag,
  Gift: FaGift,
  Clock: FaClock,
  ShoppingCart: FaShoppingCart,
  RightArrow: BsArrowRight,
};

export const Navbar = {
  Home: HiMiniHome,
  Message: MdEmail,
  Notification: FaBell,
  Profile: FaUserCircle,
  Cart: FaShoppingCart,
  Setting: IoIosSettings,
  Help: IoMdHelpCircle,
  Logout: IoLogOut,
};

export const Product = {
  Cart: IoMdCart,
  Minus: FaMinus,
  Plus: FaPlus,
  Heart: FaHeart,
  Bag: FaBagShopping,
};

export const Cart = {
  Bag: IoBagOutline,
  Minus: FaMinus,
  Plus: FaPlus,
  Close: IoMdClose,
};

export const Auth = {
  Email: MdOutlineEmail,
  Password: MdLockOutline,
  User: MdPersonOutline,
  Google: FaGoogle,
  Facebook: FaFacebook,
  Github: FaGithub,
};
