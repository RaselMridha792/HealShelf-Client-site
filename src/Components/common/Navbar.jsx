import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  console.log(user?.photoURL);

  const handleSignOut = ()=>{
    logOutUser()
    .then(()=>{
      alert('successfully signed Out')
    }).catch(error=>{
      console.log(error)
    })
  }
  const links = (
    <>
      <li>
        <NavLink to="/">home</NavLink>
      </li>
      <li>
        <NavLink to="/login">login</NavLink>
      </li>
      <li>
        <NavLink to="/register">register</NavLink>
      </li>
    </>
  );
  return (
    <>
      <section className="bg-pink-600 fixed w-full z-50 top-0">
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
          <div className="navbar-end">
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
                  <ul className="dropdown-content z-10 text-white menu p-5 shadow bg-pink-600 rounded-box w-52">
                    <li>
                      <NavLink to="/user-profile">Update Profile</NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard">Dashboard</NavLink>
                    </li>
                    <li>
                      <button onClick={handleSignOut}>Log out</button>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <Link to="/login" className="btn bg-gray-700 border-none text-white">
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
