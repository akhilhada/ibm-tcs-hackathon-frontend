import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

import { useSnackbar } from "notistack";

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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Feedback(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const [feedback, setFeedback] = useState({
    comments: "",
    suggestions: "",
    grievances: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submit", feedback);
    setTimeout(() => {
      enqueueSnackbar(
        `Your feedback has been submitted successfully. Thank you!`
      );
    }, 2000);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5" style={{ color: "#0288d1" }}>
          Please share your experience
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={(e) => handleSubmit(e)}
        >
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="comments"
            label="Comments"
            name="email"
            autoComplete="comments"
            autoFocus
            onChange={(event) =>
              setFeedback({ ...feedback, comments: event.target.value })
            }
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Suggestions"
            type="text"
            id="password"
            autoComplete="current-password"
            onChange={(event) =>
              setFeedback({ ...feedback, suggestions: event.target.value })
            }
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Grievances"
            type="text"
            id="password"
            autoComplete="current-password"
            onChange={(event) =>
              setFeedback({ ...feedback, grievances: event.target.value })
            }
          />
          <Box
            component="fieldset"
            mb={3}
            borderColor="transparent"
            style={{ display: "inline-block" }}
          >
            <Typography component="legend" style={{ color: "grey" }}>
              Rating&nbsp;{" "}
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Typography>
          </Box>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default Feedback;
