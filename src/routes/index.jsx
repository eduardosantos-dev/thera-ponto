// @ts-nocheck
import React from "react";
import { useAuth } from "../contexts/auth";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

const Routes = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <PublicRoutes /> : <PrivateRoutes />;
};

export default Routes;
