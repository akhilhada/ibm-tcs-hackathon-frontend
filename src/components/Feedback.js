import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { useSnackbar } from "notistack";

import Button from "@material-ui/core/Button";

export default function Feedback() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar("Your feedback has been submitted successfully!");
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Share your experience...
      </Typography>
      <br />
      <br />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="address1"
            name="address1"
            label="Comments"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address3"
            name="address3"
            label="Suggestions"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Grievances"
            fullWidth
            autoComplete="shipping address-line2"
          />
        </Grid>

        <Button
          variant="outlined"
          color="primary"
          type="submit"
          onClick={handleClick}
        >
          Submit
        </Button>
      </Grid>
    </React.Fragment>
  );
}
