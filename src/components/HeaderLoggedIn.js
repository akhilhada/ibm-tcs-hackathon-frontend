import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

import { withRouter } from "react-router-dom";
import Spacing from "material-ui/styles/spacing";

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
      <Typography
        variant="caption"
        style={{ fontSize: "14px", color: "#0d47a1" }}
      >
        <strong style={{ fontSize: "16px" }}>WELCOME</strong>&nbsp;{user}&nbsp;
      </Typography>
    </div>
  );
};

export default withRouter(HeaderLoggedIn);
