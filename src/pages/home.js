import React from "react";
import { Box, InputAdornment, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

export const Home = () => {
  return (
    <Box sx={{ margin: "30px" }}>
      <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
        <Link to="/">Home</Link>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
        <TextField
          label="Search"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Link to="dashboard">DashBoard</Link>
        <Link to="dashboard">Login</Link>
      </Box>
    </Box>
  );
};
