import React, { useState } from "react";
import { Dialog } from "@material-ui/core";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import DialogContent from "@material-ui/core/DialogContent";
import FormModal from "./comp/FormModal";
import showResults from "./comp/showResults";

import "./style.scss";

// import { Field, reduxForm } from 'redux-form';

function Routine() {
  // const abc = 'abc'
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div>
        <br />
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
          Open simple dialog
        </Button>
        <Dialog
          aria-labelledby="modal-change-pass"
          open={open}
          onClose={handleClose}
          className="dialogChangePass"
        >
          <DialogTitle id="modal-change-pass">Set backup account</DialogTitle>
          <DialogContent className="dialog-content">
            <FormModal onSubmit={showResults}></FormModal>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default Routine;
