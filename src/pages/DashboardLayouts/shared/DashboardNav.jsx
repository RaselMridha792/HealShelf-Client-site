import { useContext, useState } from "react";
import { FaAd, FaMoneyBill, FaUserAlt, FaUsers } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { MdOutlineHome } from "react-icons/md";
import { TbCategoryFilled } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import { GiMedicines } from "react-icons/gi";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import useRole from "../../../hooks/useRole";

const DashboardNav = () => {
  const [sidebar, setSidebar] = useState(false);
  const { user } = useContext(AuthContext);
  const [role] = useRole();
  const userRole = role;

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
              <div className="flex items-center gap-5">
                <button className="btn btn-ghost text-3xl">
                  <IoIosNotifications />
                </button>
                <div className="avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="fixed lg:relative z-10">
        <div
          className={`min-h-screen flex-col text-white pt-24 bg-gray-500 lg:flex lg:w-96 ${
            sidebar ? "w-72" : "hidden"
          }`}
        >
          <h1 className="text-3xl uppercase text-center w-full">Dashboard</h1>
          <hr className="my-5" />
          <div className="text-lg capitalize">
            <nav>
              {userRole == "admin" && (
                // admin routes
                <ul className="flex menu items-start flex-col lg:text-xl">
                  <li>
                    <NavLink to="admin-home">
                      <MdOutlineHome /> Admin Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="manage-user">
                      <FaUsers /> manage users
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="manage-category">
                      <TbCategoryFilled /> manage category
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="admin-manage-payments">
                      <FaMoneyBill></FaMoneyBill> Payment Management
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="sales-report">
                      <LiaMoneyCheckAltSolid /> sales report
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="banner-advertise">
                      <FaAd></FaAd>
                      Manage Banner Advertise
                    </NavLink>
                  </li>
                </ul>
              )}

              {/* seller routes */}
              {userRole == "Seller" && (
                <ul className="flex menu items-start flex-col lg:text-xl">
                  <li>
                    <NavLink to="/dashboard/seller-home">
                      <MdOutlineHome /> Seller Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="manage-medicine">
                      <GiMedicines />
                      manage Medicine
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="seller-payment-management">
                      <FaMoneyBill1Wave /> Payment History
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="sales-report">
                      <FaAd></FaAd> Ask for advertisement
                    </NavLink>
                  </li>
                </ul>
              )}

              {/* seller routes  */}

              {userRole == "customer" && (
                <ul className="flex menu items-start flex-col lg:text-xl">
                  <li>
                    <NavLink to="payment-management">
                      <FaMoneyBill1Wave /> Payment History
                    </NavLink>
                  </li>
                </ul>
              )}
            </nav>
            <hr className="my-5" />
            <nav>
              <ul className="menu flex flex-col text-xl">
                <li>
                  <NavLink to="/">
                    <MdOutlineHome className="text-2xl" /> Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/user-account">
                    <FaUserAlt className="text-xl" /> Account
                  </NavLink>
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
