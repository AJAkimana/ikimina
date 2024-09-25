import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Box } from "@mui/material";
import { DashBoard } from "./pages/dashboard";

export const AppRoutes = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<DashBoard />} />
      </Routes>
    </Box>
  );
};
