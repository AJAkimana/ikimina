import { Box, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <Box sx={{ margin: "30px" }}>
      <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
        <Link to="/">Home</Link>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
        <TextField label="Search" variant="outlined" 
        />
        <Link to="dashboard">DashBoard</Link>
        <Link to="dashboard">Login</Link>
      </Box>
    </Box>
  );
};
