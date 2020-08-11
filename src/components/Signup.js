import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { withRouter } from "react-router-dom";
import { FormControl } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormLabel from "@material-ui/core/FormLabel";
import env from "../environment";
import Axios from "axios";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignUp(props) {
  const handleLogin = () => {
    props.history.push("/");
  };

  const classes = useStyles();
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phoneNo: 0,
    address: "",
    pincode: 0,
    age: 0,
    sex: "",
    email: "",
    password: "",
    status: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Register..", userData);
    const request = { userDetails: userData };
    console.log("Req create", request);
    const response = await Axios.post(
      `${env.user_backend_url}/register`,
      request
    );
    console.log("Response from register", response.data);
    if (response.data.flag) {
      localStorage.setItem("user", userData.email);
      alert("Successfully registered!");
      props.history.push("/home");
    } else {
      alert("Unable to create user!!");
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={(e) => handleSubmit(e)}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={(e) =>
                  setUserData({ ...userData, firstName: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={(e) =>
                  setUserData({ ...userData, lastName: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="address"
                label="Address"
                name="address"
                autoComplete="address"
                onChange={(e) =>
                  setUserData({ ...userData, address: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="phone"
                variant="outlined"
                required
                fullWidth
                id="phone"
                label="Phone"
                autoFocus
                onChange={(e) =>
                  setUserData({ ...userData, phoneNo: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="pincode"
                label="Pincode"
                name="pincode"
                autoComplete="pin"
                onChange={(e) =>
                  setUserData({ ...userData, pincode: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                name="age"
                variant="outlined"
                required
                fullWidth
                id="age"
                label="Age"
                autoFocus
                onChange={(e) =>
                  setUserData({ ...userData, age: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Sex</FormLabel>
                <RadioGroup
                  aria-label="gender"
                  name="gender1"
                  value={userData.sex}
                  onChange={(e) =>
                    setUserData({ ...userData, sex: e.target.value })
                  }
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            {/* <Grid item xs={12} sm={6}>
              <FormControl>
                <InputLabel id="bloodGroup">Blood Group</InputLabel>
                <Select
                  variant="outlined"
                  required
                  fullWidth
                  id="bloodGroup-user"
                  label-id="bloodGroup"
                  value={userData.bloodGroup ? userData.bloodGroup : ""}
                  autoComplete="bloodGroup"
                  onChange={(e) =>
                    setUserData({ ...userData, bloodGroup: e.target.value })
                  }
                >
                  <MenuItem>O+</MenuItem>
                  <MenuItem>O-</MenuItem>
                  <MenuItem>AB+</MenuItem>
                </Select>
              </FormControl>
            </Grid> */}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            onClick={handleLogin}
          >
            Already have an account? Login!
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default withRouter(SignUp);
