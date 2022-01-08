import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Phonebook = (props) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Phone number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.phonebookInformationToShow.map((person) => (
            <TableRow key={person.name}>
              <TableCell component="th" scope="row">
                {person.name}
              </TableCell>
              <TableCell align="right">{person.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Phonebook;
