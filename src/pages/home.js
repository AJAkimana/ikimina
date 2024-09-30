import React from "react";
import { Box, InputAdornment, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import BungalowIcon from "@mui/icons-material/Bungalow";

export const Home = () => {
  return (
    <Box
      sx={{
        margin: "30px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <BungalowIcon />
        <Link to="/" style={{ textDecoration: "none" }}>
          Home
        </Link>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "50px",
          alignItems: "center",
        }}
      >
        <TextField
          size="small"
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
        <Link to="dashboard" style={{ textDecoration: "none" }}>
          DashBoard
        </Link>
        <Link to="dashboard" style={{ textDecoration: "none" }}>
          Login
        </Link>
      </Box>
    </Box>
  );
};
