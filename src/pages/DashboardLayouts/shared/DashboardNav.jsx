import { useState } from "react";
import { FaAd, FaMoneyBill, FaUsers } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { MdOutlineHome } from "react-icons/md";
import { TbCategoryFilled } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const DashboardNav = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <>
      <section className="bg-cyan-400 py-5 fixed w-full z-50">
        <div className="max-w-screen-2xl mx-auto px-5">
          <div className="flex items-center gap-5">
            <button
              onClick={() => setSidebar(!sidebar)}
              className="text-3xl lg:hidden"
            >
              <IoMenu />
            </button>
            <div className="flex justify-between items-center w-full">
              <h1 className="text-2xl uppercase font-bold">healShelf</h1>
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="fixed lg:relative z-10">
        <div
          className={`min-h-screen flex-col text-white pt-24 bg-gray-500 lg:flex w-72 ${
            sidebar ? "w-72" : "hidden"
          }`}
        >
          <h1 className="text-3xl uppercase text-center w-full">Dashboard</h1>
          <hr className="my-5" />
          <div className="pl-5 text-lg capitalize">
            <nav>
              <ul className="flex flex-col gap-3 hover:*:text-black">
                <li className="flex items-center gap-1">
                <MdOutlineHome className="text-2xl" /><NavLink to="/dashboard/admin-home">Admin Home</NavLink>
                </li>
                <li className="flex items-center gap-1">
                  <FaUsers></FaUsers>
                  <NavLink to="manage-user">manage users</NavLink>
                </li>
                <li className="flex items-center gap-1">
                <TbCategoryFilled />
                  <NavLink to="manage-category">manage category</NavLink>
                </li>
                <li className="flex items-center gap-1">
                  <FaMoneyBill></FaMoneyBill>
                  <NavLink to="payment-management">Payment Management</NavLink>
                </li>
                <li className="flex items-center gap-1">
                <LiaMoneyCheckAltSolid />
                  <NavLink to="sales-report">sales report</NavLink>
                </li>
                <li className="flex items-center gap-1">
                  <FaAd></FaAd>
                  <NavLink to="banner-advertise">Manage Banner Advertise</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardNav;
