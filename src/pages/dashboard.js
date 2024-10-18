import React from "react";
import Table from "@mui/material/Table";
import {
  Box,
  Button,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { dashBoardData } from "../helper";

export const DashBoard = () => {
  return (
    <Box sx={{ margin: "22px" }}>
      <Typography color="#4D5E80" sx={{ marginBottom: "20px" }}>
        A List of All Members of Ikimina in This Table
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ border: 2.8 }}>
              <TableCell sx={{ color: "#4D5E80", fontSize: "18px" }}>
                National ID Number
              </TableCell>
              <TableCell sx={{ color: "#4D5E80", fontSize: "18px" }}>
                Names
              </TableCell>
              <TableCell sx={{ color: "#4D5E80", fontSize: "18px" }}>
                Total contribution
              </TableCell>
              <TableCell sx={{ color: "#4D5E80", fontSize: "18px" }}>
                Member status
              </TableCell>
              <TableCell sx={{ color: "#4D5E80", fontSize: "18px" }}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dashBoardData.map((row) => (
              <TableRow key={row.name} sx={{ border: 1.5 }}>
                <TableCell component="th" scope="row">
                  {row.Id}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.totalContribution}</TableCell>
                <TableCell>{row.memberStatus}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" size="small">
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="success"
                    size="small"
                    sx={{ ml: 1 }}
                  >
                    Add Contribution
                  </Button>
                  <Button
                    variant="contained"
                    color="warning"
                    size="small"
                    sx={{ ml: 1 }}
                  >
                    Change Status
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
