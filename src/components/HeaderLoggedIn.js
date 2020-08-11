import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

import { withRouter } from "react-router-dom";

const HeaderLoggedIn = (props) => {
  const handleLogout = () => {
    props.setLoggedIn(false);
    localStorage.removeItem("firstname");
    localStorage.removeItem("lastname");
  };

  const user = `${localStorage.getItem("firstname")} ${localStorage.getItem(
    "lastname"
  )}`;
  console.log(user);
  return (
    <div>
      <Typography variant="caption">
        <strong>Welcome</strong>&nbsp;{user}&nbsp;
      </Typography>
    </div>
  );
};

export default withRouter(HeaderLoggedIn);
