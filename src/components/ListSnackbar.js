import React from "react";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ListSnackbar = ({ handleClose, open }) => {
  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        open={open}
        autoHideDuration={1000}
        onClose={handleClose}
      >
        <Alert
          style={{ boxShadow: "none" }}
          onClose={handleClose}
          severity="success"
        >
          Cart added successfully!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ListSnackbar;
