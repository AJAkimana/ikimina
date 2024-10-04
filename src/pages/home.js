import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <Box>
      <h1>This is the Home page</h1>
      <Link to="/login" style={{ textDecoration: "none" }}>
        Click to view our Login page
      </Link>
    </Box>
  );
};
