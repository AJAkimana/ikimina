import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <Box>
      <h1>This is the home page</h1>
      <Link to="login">Click to view our Login page</Link>
    </Box>
  );
};
