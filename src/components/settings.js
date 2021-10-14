import { TextField, Box, Container, Button } from "@material-ui/core";

import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { forwardRef, useState } from "react";
const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SettingsPage = (props) => {
  const [open, setOpen] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!props.dataNews.startsWith("pub_")) {
      setHasError(true);
    } else {
      setOpen(true);
      localStorage.setItem("newsData", props.dataNews);
    }
  };

  const newsDataChangeHandler = (event) => {
    setHasError(false);
    props.setNewsData(event.target.value);
  };

  return (
    <div>
      <Container style={{ marginTop: 20 }}>
        <form onSubmit={handleFormSubmit}>
          <Box style={{ marginTop: 20 }}>
            <TextField
              id="newsdata-api"
              value={props.dataNews}
              label="NewsData API Key"
              onChange={newsDataChangeHandler}
              error={hasError}
              helperText={hasError ? "Wrong Api Key" : ""}
            />
          </Box>
          <Box style={{ marginTop: 30 }}>
            <Button
              type="submit"
              variant="contained"
              onClick={handleFormSubmit}
            >
              Submit
            </Button>
          </Box>
        </form>
      </Container>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Api key submited.
        </Alert>
      </Snackbar>
    </div>
  );
};

export default SettingsPage;
