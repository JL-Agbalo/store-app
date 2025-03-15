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
} from "react-icons/fa";
import { HiOutlineUserCircle, HiOutlineShoppingBag } from "react-icons/hi2";
import { LuMenu } from "react-icons/lu";
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
} from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { BsBox } from "react-icons/bs";
import { TbCategoryMinus } from "react-icons/tb";

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
  Products: BsBox,
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
