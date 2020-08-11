import React from "react";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
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
    height: 245,
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
}));

function App() {
  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className="App">
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={fixedHeightPaper}>
            <Typography variant="h4">
              <em> Find your nearest medical facilities</em>
            </Typography>
            <br />
            <Typography>
              Search to locate your nearest hospitals and confirm the
              availability of services such as general beds, critical care and
              ambulances. Daily testing results from your nearest test centres
              are available.{" "}
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
            <img
              style={{ width: "100%", height: "100%" }}
              src={
                "https://medicaldialogues.in/h-upload/2020/04/29/127970-hospital-1.jpg"
              }
              alt="Hospital"
            ></img>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={fixedHeightPaper}>
            <br />
            <Typography>
              We have collected a list of nearest hospitals and the facilities
              they offer including the emergency facilities such as ambulances
              and critical care units.
              <br />
              Navigate to the Hospitals tab to find out the list of your nearest
              hospitals and to check for their availability of beds.
              <br />
              Navigate to the Emergency Services to check for ambulance
              facilities based on your location. You can also call an ambulance
              based on the availability.
              <br />
              Navigate to the Testing results tab to know more about the cases
              in your nearby locations.
              <br />
              Navigate to feedback to provide your valuable comments,suggestions
              and grievances.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
