import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";

import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import mainListItems from "./listItems";
import { withRouter } from "react-router-dom";
import HeaderLoggedIn from "./HeaderLoggedIn";
import HeaderLoggedOut from "./HeaderLoggedOut";
import { SnackbarProvider } from "notistack";
import { Link } from "react-router-dom";
import { ContentBlock } from "material-ui/svg-icons";

import logotcs from "../assets/logo_tcs.png";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  // a: {
  //   textDecoration: "none ! important",
  // },
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
    textDecoration: "none ! important",
    // width: "100%",
    // textAlign: "center",
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },

  logoimg: {
    // position: "fixed",
    margin: "9px 200px 0px 0px",
    right: 0,
    height: "48px",
    display: "inline",
  },
}));

function Layout({ children }) {
  const [loggedIn, setLoggedIn] = useState(
    Boolean(localStorage.getItem("firstname"))
  );

  const classes = useStyles("#FFFFFF");
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <SnackbarProvider>
        <CssBaseline />
        <AppBar
          position="absolute"
          className={clsx(classes.appBar, open && classes.appBarShift)}
          color="transparent"
        >
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(
                classes.menuButton,
                open && classes.menuButtonHidden
              )}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              button
              variant="h6"
              color="inherit"
              className={classes.title}
              component={Link}
              to="/home"
              style={{ color: "#0d47a1" }}
            >
              TCS&nbsp;
              <span style={{ color: "#00BFFF", fontSize: "24px" }}>
                HealthOne
              </span>
              <br />
              <Typography
                button
                variant="overline"
                color="inherit"
                // className={classes.title}
                style={{
                  fontStyle: "italic",
                  color: "#03a9f4",
                  fontWeight: "bold",
                }}
              >
                One place for patients and frontend warriors...
              </Typography>
            </Typography>

            <div style={{ float: "right", display: "inline-block" }}>
              {loggedIn ? (
                <HeaderLoggedIn setLoggedIn={setLoggedIn} />
              ) : (
                <HeaderLoggedOut setLoggedIn={setLoggedIn} />
              )}
            </div>
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/1280px-Tata_Consultancy_Services_Logo.svg.png"
                alt="Logo"
                // className={classes.logoimg}
                style={{ height: "48px", width: "120px" }}
              />
            </div>

            {/* <Button variant="contained" color="primary">
            Login/Register
          </Button> */}
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          {/* <Divider /> */}
          <List>{mainListItems}</List>
          <Divider />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            {children}
          </Container>
        </main>
        {/* <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </footer> */}
      </SnackbarProvider>
    </div>
  );
}

export default withRouter(Layout);
