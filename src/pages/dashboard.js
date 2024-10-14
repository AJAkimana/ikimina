import React from "react";
import Table from "@mui/material/Table";
import {
  Box,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const Data = [
  { name: "nevillen Karangwa ", Id: "1899999657843567" },
  { name: "Kevillen Kirezi ", Id: "2002999657842587" },
  { name: "Cyuzuzo Nellen", Id: "2004456789034545" },
];

function formatRwandaIdNumber(idNumber) {
  // Check if the ID number is valid (16 digits)
  if (!/^\d{16}$/.test(idNumber)) {
    throw new Error("Invalid Rwanda ID number. It should be 16 digits long.");
  }
  return idNumber;
}

export const DashBoard = () => {
  return (
    <Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>National ID Number</TableCell>
              <TableCell align="right">Names</TableCell>
              <TableCell align="right">Total contribution</TableCell>
              <TableCell align="right">Member status</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Data.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {/* You can add a National ID column here if needed */}
                  {formatRwandaIdNumber(row.Id)}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">
                  {" "}
                  {/* Add Total contribution data here */}
                </TableCell>
                <TableCell align="right">
                  {" "}
                  {/* Add Member status data here */}
                </TableCell>
                <TableCell align="right">
                  {" "}
                  {/* Add Actions data here */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
