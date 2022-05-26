import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Link, NavLink } from "react-router-dom";
import auth from "../Authentication/Firebase.init";

const Navbar = ({ children }) => {
  const [user] = useAuthState(auth);
  const logOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
    toast.success("User Logged Out", { id: "test" });
  };

  return (
    <div class="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">
        <div class="w-full navbar lg:px-12 bg-base-300">
          {user && (
            <label
              for="my-drawer-2"
              class="btn btn-primary drawer-button lg:hidden"
            >
              Open drawer
            </label>
          )}
          <div class="flex-1 px-2 mx-2 text-3xl font-bold normal-case">
            Auto<span className="text-red-700">Parts</span>
          </div>
          <div class="flex-none lg:hidden">
            <label for="my-drawer-3" class="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-6 h-6 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div class="flex-none hidden lg:block">
            <ul class="menu menu-horizontal">
              <li>
                <NavLink
                  className="font-semibold ml-3 rounded-lg text-lg"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="font-semibold ml-3 rounded-lg text-lg"
                  to="/blog"
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="font-semibold ml-3 rounded-lg text-lg"
                  to="/portfolio"
                >
                  Portfolio
                </NavLink>
              </li>
              {user && (
                <li>
                  <NavLink
                    className="font-semibold ml-3 rounded-lg text-lg"
                    to="/dashboard"
                  >
                    Dashboard
                  </NavLink>
                </li>
              )}
              <li>
                {user ? (
                  <button
                    onClick={logOut}
                    className="font-semibold ml-3 rounded-lg text-lg bg-error"
                  >
                    Log Out
                  </button>
                ) : (
                  <Link
                    className="font-semibold ml-3 rounded-lg text-lg bg-accent"
                    to="/login"
                  >
                    Log In
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
        {children}
      </div>
      <div class="drawer-side">
        <label for="my-drawer-3" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
          <li>
            <NavLink className="mb-3" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="mb-3" to="/blog">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink className="mb-3" to="/portfolio">
              Portfolio
            </NavLink>
          </li>
          <li>
            {user ? (
              <button
                onClick={logOut}
                className="font-semibold rounded-lg text-lg bg-error"
              >
                Log Out
              </button>
            ) : (
              <Link
                className="font-semibold rounded-lg text-lg bg-accent"
                to="/login"
              >
                Log In
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
