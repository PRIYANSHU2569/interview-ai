import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router";
import React from "react";
import AppLoader from "../../../components/AppLoader/AppLoader";

const Protected = ({ children }) => {
  const { isInitializing, user } = useAuth();

  if (isInitializing) {
    return <AppLoader title="Checking your session" />;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default Protected;
