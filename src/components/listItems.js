import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import AirportShuttleIcon from "@material-ui/icons/AirportShuttle";
import FeedbackIcon from "@material-ui/icons/Feedback";
import AppsIcon from "@material-ui/icons/Apps";
import LayersIcon from "@material-ui/icons/Layers";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";

const handleLogout = () => {
  localStorage.removeItem("firstname");
  localStorage.removeItem("lastname");
  console.log("User logged out");
};

const mainListItems = (
  <div>
    <ListItem button component={Link} to="/home">
      <ListItemIcon>
        <AppsIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button component={Link} to="/hospitals">
      <ListItemIcon>
        <LocalHospitalIcon />
      </ListItemIcon>
      <ListItemText primary="Hospitals" />
    </ListItem>

    <ListItem button component={Link} to="/emergency-services">
      <ListItemIcon>
        <AirportShuttleIcon />
      </ListItemIcon>
      <ListItemText primary="Emergency Services" />
    </ListItem>
    <ListItem button component={Link} to="/testcenter-results">
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Testing results" />
    </ListItem>
    <ListItem button component={Link} to="/feedback">
      <ListItemIcon>
        <FeedbackIcon />
      </ListItemIcon>
      <ListItemText primary="Feedback" />
    </ListItem>
    <ListItem button component={Link} to="/" onClick={handleLogout}>
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItem>
  </div>
);

export default mainListItems;
