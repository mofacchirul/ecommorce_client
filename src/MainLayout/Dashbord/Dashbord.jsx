import { CgProfile } from "react-icons/cg";
import { CiMenuBurger } from "react-icons/ci";
import {  FaHome } from "react-icons/fa";
import { FaShop, FaUsers } from "react-icons/fa6";
import { MdOutlinePreview, MdOutlinePayment, MdShoppingCart } from "react-icons/md";
import { RiAlignItemBottomLine } from "react-icons/ri";
import { TbBrandBooking } from "react-icons/tb"; // Correct import
import { NavLink, Outlet } from "react-router-dom";
import UseAmdmin from "./UseAdmin/UseAmdmin";
const Dashbord = () => {
  const [admin] = UseAmdmin();
  return (
    <div className="max-w-screen-xl  lg:mx-auto ">
      <div className="flex ">
        <div className="lg:w-72 w-48 min-h-screen bg-orange-400">
          <ul className="menu p-4 uppercase">
           {
            admin ?    
            <>
             <li className="text-sm lg:text-xl font-medium text-white">
              <NavLink to="/dashbord/adminhome">
                {" "}
                <FaHome /> Admin Home
              </NavLink>
            </li>
            <li className="text-sm lg:text-xl font-medium text-white">
              <NavLink to="/dashbord/men">
              <RiAlignItemBottomLine /> Add Men
              </NavLink>
            </li>
            <li className="text-sm lg:text-xl font-medium text-white">
              <NavLink to="/dashbord/women">
              <RiAlignItemBottomLine /> Add Woman
              </NavLink>
            </li>
            <li className="text-sm lg:text-xl font-medium text-white">
              <NavLink to="/dashbord/kids">
              <RiAlignItemBottomLine /> Add Kids
              </NavLink>
            </li>
            <li className="text-sm lg:text-xl font-medium text-white">
              <NavLink to="/dashbord/booking">
                {" "}
                <TbBrandBooking /> Manage Bookings
              </NavLink>
            </li>
            <li className="text-sm lg:text-xl font-medium text-white">
              <NavLink to="/dashbord/all-users">
                {" "}
                <FaUsers /> All Users
              </NavLink>
            </li>
           
            </>
            :
            <>
             <li className="text-sm lg:text-xl font-medium text-white">
              <NavLink to="/dashbord/home">
                {" "}
                <FaHome /> My Home
              </NavLink>
            </li>
            <li className="text-sm lg:text-xl font-medium text-white">
              <NavLink to="/dashbord/profile">
              <CgProfile />  My Profile
              </NavLink>
            </li>
           
            <li className="text-sm lg:text-xl font-medium text-white">
              <NavLink to="/dashbord/payment">
                {" "}
                <MdOutlinePayment /> Payment History
              </NavLink>
            </li>
            <li className="text-sm lg:text-xl font-medium text-white">
              <NavLink to="/dashbord/card">
                {" "}
                <FaShop /> My Card
              </NavLink>
            </li>
            <li className="text-sm lg:text-xl font-bold text-white">
              <NavLink to="/dashbord/review">
                {" "}
                <MdOutlinePreview /> Add Review{" "}
              </NavLink>
            </li>
           
            </>
           }
            <div className="divider "></div>

            <li className="text-sm lg:text-xl font-medium text-white">
              <NavLink to="/">
                {" "}
                <FaHome /> HOME
              </NavLink>
            </li>
            <li  className="text-sm lg:text-xl font-medium text-white">
              <NavLink to="/men"> <CiMenuBurger /> MEN </NavLink>
            </li>
            <li  className="text-sm lg:text-xl font-medium text-white">
              <NavLink to="/women"> <MdShoppingCart /> WOMAN</NavLink>
            </li>
            <li  className="text-sm lg:text-xl font-medium text-white">
              <NavLink to="/kids"> <MdShoppingCart /> KIDS</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex-1 bg-slate-800 px-5">
          <Outlet />
      
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
