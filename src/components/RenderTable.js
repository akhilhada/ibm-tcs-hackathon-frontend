import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import Rating from "@material-ui/lab/Rating";

import { useSnackbar } from "notistack";
import Axios from "axios";
import env from "../environment";

import Paper from "@material-ui/core/Paper";
import { Container } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 750,
  },
  cell: {
    color: "#0d47a1",
  },
  cell2: {
    color: "#1976d2",
    background: "#fff9c4",
  },
});

function RenderTable(props) {
  const handleCall = () => {
    setTimeout(() => {
      enqueueSnackbar(`Booking success. Ambulance will arrive soon`);
    }, 2000);
  };

  const initialVal = props.rows[0];
  console.log("From render...", props.rows[0]);
  const [rows, setRows] = useState(initialVal);
  let count = 0;
  // const rows = props.rows[0];
  const headers = props.headers;
  console.log("Rows..", rows);
  const classes = useStyles();
  const middleware_url = env.middleware_url;
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handleClick = async (id, index) => {
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
    if (response.data.statusCode === 200) {
      setRows([rows.splice(index, 1)]);
      setRows([...rows, response.data.result.hospital.data]);
      console.log("Updated state is ....", rows);

      enqueueSnackbar(`Booking success with reference Id ${id}`);
    }
  };
  return (
    <div>
      {rows.length ? (
        <TableContainer component={Paper} style={{ border: "1px solid" }}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead style={{ background: "#ffff8d" }}>
              <TableRow>
                {headers.map((header) => (
                  <TableCell
                    key={headers.indexOf(header)}
                    align="left"
                    className={classes.cell}
                    style={{ border: "1px solid" }}
                  >
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={count++} className={classes.cell2}>
                  <TableCell
                    className={classes.cell2}
                    style={{ border: "1px solid" }}
                  >
                    {row.hospitalName}
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    className={classes.cell2}
                    style={{ border: "1px solid" }}
                  >
                    {row.address}
                  </TableCell>
                  <TableCell
                    align="center"
                    className={classes.cell2}
                    style={{ border: "1px solid" }}
                  >
                    <Rating name="read-only" value={row.rating} readOnly />

                    {/* {row.rating} */}
                  </TableCell>
                  <TableCell
                    align="center"
                    className={classes.cell2}
                    style={{ border: "1px solid" }}
                  >
                    {row.insuranceCoverage}
                  </TableCell>
                  <TableCell
                    align="center"
                    className={classes.cell2}
                    style={{ border: "1px solid" }}
                  >
                    {row.phoneNo}
                  </TableCell>
                  <TableCell
                    align="center"
                    className={classes.cell2}
                    style={{ border: "1px solid" }}
                  >
                    {row.no_bedGeneral}
                  </TableCell>
                  <TableCell
                    align="center"
                    className={classes.cell2}
                    style={{ border: "1px solid" }}
                  >
                    {row.no_IcuAvailable}
                  </TableCell>
                  <TableCell
                    align="center"
                    className={classes.cell2}
                    style={{ border: "1px solid" }}
                  >
                    {props.buttonFlag ? (
                      <Button
                        variant="outlined"
                        color="primary"
                        size="small"
                        onClick={() => handleClick(row._id, rows.indexOf(row))}
                      >
                        Book Now
                      </Button>
                    ) : null}
                  </TableCell>
                  <TableCell
                    align="center"
                    className={classes.cell2}
                    style={{ border: "1px solid" }}
                  >
                    {props.buttonFlag ? (
                      <Button
                        variant="outlined"
                        color="primary"
                        size="small"
                        onClick={handleCall}
                      >
                        Call Now
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
