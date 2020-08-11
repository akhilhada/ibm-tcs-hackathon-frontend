import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

import { withRouter } from "react-router-dom";

const HeaderLoggedIn = (props) => {
  const handleLogout = () => {
    props.setLoggedIn(false);
    localStorage.removeItem("user");
  };
  return (
    <div>
      <Typography variant="caption">
        {localStorage.getItem("user")}&nbsp;
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleLogout}
        component={Link}
        to="/"
        style={{ margin: "1px" }}
      >
        Logout
      </Button>
    </div>
  );
};

export default withRouter(HeaderLoggedIn);
