import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import { useSnackbar } from "notistack";
import Axios from "axios";
import env from "../environment";

import Paper from "@material-ui/core/Paper";
import { Container } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function RenderTable(props) {
  const rows = props.rows[0];
  const headers = props.headers;
  console.log("Rows..", rows);
  const classes = useStyles();
  const middleware_url = env.middleware_url;
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handleClick = async (id) => {
    const req = {
      userDetails: { email: localStorage.getItem("user") },
      hospitalDetails: {
        id: id,
        bookingType: "gen",
      },
    };
    console.log("req", req);
    const response = await Axios.post(`${middleware_url}book`, req);
    console.log("Response", response.data);
    if (response.data.statusCode === 200)
      enqueueSnackbar(`Booking success with reference Id ${id}`);
  };
  return (
    <div>
      {rows.length ? (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                {headers.map((header) => (
                  <TableCell key={headers.indexOf(header)} align="left">
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row._id}>
                  <TableCell>{row.hospitalName}</TableCell>
                  <TableCell component="th" scope="row">
                    {row.address}
                  </TableCell>
                  <TableCell align="center">{row.rating}</TableCell>
                  <TableCell align="center">{row.insuranceCoverage}</TableCell>
                  <TableCell align="center">{row.phoneNo}</TableCell>
                  <TableCell align="center">{row.genBedAvailability}</TableCell>
                  <TableCell align="center">{row.icuAvailability}</TableCell>
                  <TableCell align="center">
                    {props.buttonFlag ? (
                      <Button
                        variant="outlined"
                        color="primary"
                        size="small"
                        onClick={() => handleClick(row._id)}
                      >
                        Book Now
                      </Button>
                    ) : null}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Container>There are no hospitals near you!</Container>
      )}
    </div>
  );
}

export default RenderTable;
