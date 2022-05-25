import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../Authentication/Firebase.init";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  console.log(admin);
  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <Outlet />
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-200 text-base-content">
          {admin && (
            <>
              <li>
                <Link to="/dashboard/add-item">Add Item</Link>
              </li>
              <li>
                <Link to="/dashboard/make-admin">Make Admin</Link>
              </li>
              <li>
                <Link to="/dashboard/manage-order">Manage Order</Link>
              </li>
              <li>
                <Link to="/dashboard/manage-parts">Manage Item</Link>
              </li>
            </>
          )}
          {!admin && (
            <>
              <li>
                <Link to="/dashboard/my-order">My Order</Link>
              </li>
              <li>
                <Link to="/dashboard/add-review">Add Review</Link>
              </li>
            </>
          )}
          <li>
            <Link to="/dashboard">My Profile</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
