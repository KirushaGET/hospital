import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function CustomizedSnackbars({text, state, setAlertFlag, alertStyle}) {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlertFlag(false);
  };

  return (
    <div >
      <Snackbar open={state} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={alertStyle}>
          {text}
        </Alert>
      </Snackbar>
    </div>
  );
}