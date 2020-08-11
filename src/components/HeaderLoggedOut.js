import React from "react";
import Button from "@material-ui/core/Button";

import { withRouter } from "react-router-dom";

const HeaderLoggedOut = (props) => {
  const handleLogin = () => {
    console.log("Onclick");
    props.history.push("/");
  };
  console.log("From login");
  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Login/Register
      </Button>
    </div>
  );
};

export default withRouter(HeaderLoggedOut);
