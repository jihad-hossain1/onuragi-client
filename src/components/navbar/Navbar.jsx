import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/animalKidol.png";
import { AuthContext } from "../../provider/AuthProvider";
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="hover:text-primary hover:font-semibold">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-primary" : "default"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="hover:font-semibold hover:text-primary">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-primary" : "default"
                }
                to="allToy"
              >
                All Toy
              </NavLink>
            </li>
            {user && (
              <li className=" hover:font-semibold hover:text-primary">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-primary" : "default"
                  }
                  to="myToy"
                >
                  My Toy
                </NavLink>
              </li>
            )}
            {user && (
              <li className=" hover:font-semibold hover:text-primary">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-primary" : "default"
                  }
                  to="addToy"
                >
                  Add A Toy
                </NavLink>
              </li>
            )}

            <li className=" hover:font-semibold">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-primary" : "default"
                }
                to="blog"
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <img src={logo} className="w-10" alt="" />
          <NavLink to="/" className="text-xl ml-2">
            Animal{" "}
            <span className="font-semibold hover:text-primary">Kidol</span>
          </NavLink>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal space-x-10">
          <li className=" hover:font-semibold hover:text-primary">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-primary" : "default"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className=" hover:font-semibold hover:text-primary">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-primary" : "default"
              }
              to="allToy"
            >
              All Toy
            </NavLink>
          </li>
          {user && (
            <li className="hover:font-semibold hover:text-primary">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-primary" : "default"
                }
                to="myToy"
              >
                My Toy
              </NavLink>
            </li>
          )}
          {user && (
            <li className="hover:font-semibold hover:text-primary">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-primary" : "default"
                }
                to="addToy"
              >
                Add A Toy
              </NavLink>
            </li>
          )}
          <li className="  hover:font-semibold hover:text-primary">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-primary" : "default"
              }
              to="blog"
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center space-x-2">
            <FaUserAlt
              title={user.email.slice(0, 5)}
              className="text-lg"
            ></FaUserAlt>
            <img
              className="w-10"
              title={user?.displayName}
              src={
                user ? (
                  <>{user?.photoURL}</>
                ) : (
                  <>
                    <p>Icon</p>
                  </>
                )
              }
              alt=""
            />
            <span onClick={handleLogOut} className="ml-2 cursor-pointer">
              LogOut
            </span>
          </div>
        ) : (
          <Link className="hover:text-primary hover:font-semibold" to="/login">
            LogIn
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
