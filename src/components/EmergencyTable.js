import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import Paper from "@material-ui/core/Paper";
import { Container } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  cell: {
    color: "#0d47a1",
  },
  cell2: {
    color: "#1976d2",
    background: "#fff9c4",
  },
});

function EmergencyTable(props) {
  const rows = props.rows[0];
  const headers = props.headers;
  console.log("Rows..", rows);
  const classes = useStyles();

  return (
    <div>
      {rows.length ? (
        <TableContainer component={Paper}>
          <Table
            className={classes.table}
            aria-label="simple table"
            style={{ border: "0.5px solid" }}
          >
            <TableHead
              style={{ background: "#ffff8d", borderBottom: "0.5px solid" }}
            >
              <TableRow>
                {headers.map((header) => (
                  <TableCell
                    key={headers.indexOf(header)}
                    align="left"
                    className={classes.cell}
                    style={{ border: "0.5px solid" }}
                  >
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row._id}>
                  <TableCell
                    align="left"
                    className={classes.cell2}
                    style={{ border: "0.5px solid" }}
                  >
                    {row.hospitalName}
                  </TableCell>
                  <TableCell
                    align="center"
                    className={classes.cell2}
                    style={{ border: "0.5px solid" }}
                  >
                    {row.ambulanceAvailability}
                  </TableCell>
                  <TableCell
                    align="center"
                    className={classes.cell2}
                    style={{ border: "0.5px solid" }}
                  >
                    {row.ambulanceResponseTime}
                  </TableCell>
                  <TableCell
                    align="left"
                    className={classes.cell2}
                    style={{ border: "0.5px solid" }}
                  >
                    {row.phoneNo}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Container>Unavailable</Container>
      )}
    </div>
  );
}

export default EmergencyTable;
