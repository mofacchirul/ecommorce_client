import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useContext, useEffect } from "react";
import { Authcontext } from "../../Provider/ProviderAuth/ProviderAuth";
import Itemtan from "../../Axios/Hook/Item/Item";
import UseAmdmin from "../../MainLayout/Dashbord/UseAdmin/UseAmdmin";

const Navbar = () => {
  const [item] = Itemtan();
  const [admin] = UseAmdmin(); // Fixed function call
  const { Singout, user } = useContext(Authcontext);
  const location = useLocation();

  // Conditional Dashboard Link
  const dashboardPath = admin ? "/dashbord/all-users" : "/dashbord/card";

  // Update Page Title
  useEffect(() => {
    document.title = `Shopper | ${location.pathname.replace("/", "") || "Home"}`;
  }, [location]);

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-blue-500  btn btn-neutral  font-bold" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/men"
          className={({ isActive }) => (isActive ? "text-blue-500 btn btn-neutral  font-bold" : "")}
        >
          Men
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/women"
          className={({ isActive }) => (isActive ? "text-blue-500 btn btn-neutral font-bold" : "")}
        >
          Women
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/kids"
          className={({ isActive }) => (isActive ? "text-blue-500 btn btn-neutral font-bold" : "")}
        >
          Kids
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "text-blue-500 btn btn-neutral font-bold" : "")}
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar sticky top-0 z-10 backdrop-blur-sm bg-white/30 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/">
            <div className="flex items-center gap-2">
              <img src={logo} alt="logo" />
              <a className="text-xl font-bold uppercase">shopper</a>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end space-x-2">
          {user ? (
            <div className="flex justify-center items-center space-x-2">
              <div>
                <img
                  src={user?.photoURL}
                  className="w-14 h-14 mx-auto rounded-full"
                  alt="user"
                />
              </div>

              <button onClick={Singout} className="btn btn-error">
                Log Out
              </button>

              <NavLink to={dashboardPath}>
                <div className="indicator">
                  <span className="indicator-item badge badge-secondary">
                    +{item.length}
                  </span>
                  <button className="text-3xl">
                    <MdOutlineShoppingCart />
                  </button>
                </div>
              </NavLink>
            </div>
          ) : (
            <>
              <Link to="/Login">
                <button className="btn">Login</button>
              </Link>
              <div className="indicator">
                <span className="indicator-item badge badge-secondary">+0</span>
                <button className="text-2xl">
                  <MdOutlineShoppingCart />
                </button>
              </div>
            </>
          )}
        </div>
      </div>

     
    </div>
  );
};

export default Navbar;
