import React from "react";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

import undraw_medical_care_movn from "./assets/undraw_medical_care_movn.png";
import undraw_medical_research_qg4d from "./assets/undraw_medical_research_qg4d.png";
import undraw_social_distancing_2g0u from "./assets/undraw_social_distancing_2g0u.png";

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
    border: "0.5px solid #0d47a1",
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
      <Grid container spacing={3} style={{ background: "#00838f" }}>
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
            <img
              style={{ width: "100%", height: "100%" }}
              src={undraw_medical_care_movn}
              alt="Hospital"
            ></img>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
            <img
              style={{ width: "100%", height: "100%" }}
              src={undraw_social_distancing_2g0u}
              alt="Ambulance"
            ></img>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
            <img
              style={{ width: "100%", height: "100%" }}
              src={undraw_medical_research_qg4d}
              alt="Test"
            ></img>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={fixedHeightPaper}>
            <br />
            <Typography
              style={{
                color: "#1E90FF",
                fontStyle: "italic",
                fontSize: "14px",
              }}
              m={1}
              p={1}
            >
              <p style={{ color: "#0d47a1" }}>
                We have collected a list of nearest hospitals and the facilities
                they offer including the emergency facilities such as ambulances
                and critical care units.
              </p>
              <p style={{ color: "#1565c0" }}>
                Navigate to the Hospitals tab to find out the list of your
                nearest hospitals and to check for their availability of beds.
              </p>
              <p style={{ color: "#1976d2" }}>
                Navigate to the Emergency Services to check for ambulance
                facilities based on your location. You can also call an
                ambulance based on the availability.
              </p>
              <p>
                Navigate to the Testing results tab to know more about the cases
                in your nearby locations.
              </p>

              <p style={{ color: "#2962ff" }}>
                Navigate to feedback to provide your valuable
                comments,suggestions and grievances.
              </p>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
