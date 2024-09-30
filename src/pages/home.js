import React from "react";
import { Box, InputAdornment, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

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
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          Home
        </Link>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "10px",
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
