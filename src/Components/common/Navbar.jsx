import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { FaCartShopping } from "react-icons/fa6";
import useRole from "../../hooks/useRole";
import useCart from "../../hooks/useCart";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const [role] = useRole();
  const [cart] = useCart();
  const userRole = role;
  const handleSignOut = () => {
    logOutUser()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Logout successful",
          showConfirmButton: false,
          timer: 1500
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const links = (
    <>
      <li>
        <NavLink to="/">home</NavLink>
      </li>
      <li>
        <NavLink to="/shop-now">shop now</NavLink>
      </li>
    </>
  );
  return (
    <>
      <section className="bg-cyan-400 fixed w-full z-50 top-0">
        <div className="navbar max-w-screen-2xl mx-auto px-5">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <Link to="/" className="uppercase text-2xl text-white font-bold">
              HealShelf
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end gap-10">
            <div className="relative">
              <div
                className="dropdown dropdown-bottom dropdown-left"
                tabIndex={0}
              >
                <Link to="/cart"><FaCartShopping className="text-3xl" /></Link>
              </div>
              <div className="absolute -top-3 -right-5 badge badge-secondary">
                <p>{cart?.length}</p>
              </div>
            </div>
            {user ? (
              <>
                <div
                  className="dropdown dropdown-bottom dropdown-left"
                  tabIndex={0}
                >
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      <img src={user?.photoURL} />
                    </div>
                  </div>
                  <ul className="dropdown-content z-10 mt-2 menu p-5 shadow bg-cyan-400 rounded-box w-52">
                    <li>
                      <NavLink to="/user-profile">Update Profile</NavLink>
                    </li>
                    <li>
                      {userRole == "admin" && (
                        <NavLink to="/dashboard/admin-home">Dashboard</NavLink>
                      )}
                      {userRole == "Seller" && (
                        <NavLink to="/dashboard/seller-home">Dashboard</NavLink>
                      )}
                      {userRole == "customer" && (
                        <NavLink to="/dashboard/customer-home">
                          Dashboard
                        </NavLink>
                      )}
                    </li>
                    <li>
                      <button onClick={handleSignOut}>Log out</button>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <Link
                to="/login"
                className="btn bg-gray-700 border-none text-white"
              >
                Join Now
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
