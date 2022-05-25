import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../Components/Spinner";
import auth from "./Firebase.init";

const PrivateRoute = ({ children }) => {
  let [user, loading] = useAuthState(auth);
  let location = useLocation();

  if (loading) return <Spinner/>;

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
