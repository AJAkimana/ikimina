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

const Data = [
  {
    Id: "1899999657843567",
    name: "nevillen Karangwa ",
    totalContribution: "5",
    memberStatus: "Active",
  },
  {
    Id: "2002999657842587",
    name: "Kevillen Kirezi ",
    totalContribution: "7",
    memberStatus: "Inactive",
  },
  {
    Id: "2004456789034545",
    name: "Cyuzuzo Nellen",
    totalContribution: "8",
    memberStatus: "Inactive",
  },
];

function formatRwandaIdNumber(idNumber) {
  // Check if the ID number is valid (16 digits)
  if (!/^\d{16}$/.test(idNumber)) {
    throw new Error("Invalid Rwanda ID number. It should be 16 digits long.");
  }

  // Format the ID number with spaces
  const formattedIdNumber = `${idNumber.slice(0, 4)} ${idNumber.slice(4, 8)} ${idNumber.slice(8, 12)} ${idNumber.slice(12, 16)}`;
  return formattedIdNumber;
}

export const DashBoard = () => {
  return (
    <Box sx={{ margin: "22px" }}>
      <Typography color="#4D5E80" sx={{ marginBottom: "20px" }}>
        This is the DashBoard page
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
            {Data.map((row) => (
              <TableRow key={row.name} sx={{ border: 1.5 }}>
                <TableCell component="th" scope="row">
                  {formatRwandaIdNumber(row.Id)}
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
