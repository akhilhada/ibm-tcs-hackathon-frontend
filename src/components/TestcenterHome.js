import React, { useState } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Container from "@material-ui/core/Container";

import { useSnackbar } from "notistack";

import SearchIcon from "@material-ui/icons/Search";

import Axios from "axios";
import env from "../environment";
import TestcenterTable from "./TestcenterTable";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  tableHead: {
    background: "#303f9f",
    color: "white",
  },
}));

export default function TestcenterHome(props) {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const [rows, setRows] = useState([]);
  const [pincode, setPincode] = useState(null);
  const classes = useStyles();

  const headersTest = [
    "Hospital Name",
    "Number of samples tested",
    "Positive",
    "Ward number",
    "Date",
  ];

  const menuId = "primary-search-account-menu";

  const handleKeyPress = async (e) => {
    if (e.key === "Enter") {
      const result = await Axios.post(`${env.testcenter_url}`, {
        pincode: pincode,
      });
      console.log(result);
      if (result.data.length) {
        setRows([...rows, result.data]);
      } else {
        setRows([]);
        if (pincode >= 400600 && pincode <= 400800)
          enqueueSnackbar(
            `No facilities found with given pincode. Try searching 400601,400607,400615...`
          );
        else enqueueSnackbar(`Service unavailable in your location`);
      }
    }
  };
  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar className={classes.tableHead}>
          <Typography
            className={classes.title}
            style={{ fontSize: "14px", fontWeight: "bold" }}
            noWrap
          >
            Results from testcentres
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Enter pincode…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => setPincode(e.target.value)}
              onKeyPress={(e) => {
                handleKeyPress(e);
              }}
            />
          </div>
          <div className={classes.grow} />
        </Toolbar>
      </AppBar>

      {rows.length ? (
        <TestcenterTable rows={rows} headers={headersTest} buttonFlag="false" />
      ) : null}
    </div>
  );
}
