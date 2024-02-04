import React from "react";
import {  Navigate } from "react-router-dom";
import authService from "./authService";

const PrivateRoute = ({ children}) => {
  
  return authService.getToken() ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
