import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <Box>
      <h1>This is the Login page</h1>
      <Link to="/">Click to view our Home page</Link>
    </Box>
  );
};
