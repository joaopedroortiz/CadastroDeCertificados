import * as React from "react";

import Modal from "@mui/material/Modal";
import "../Index.css";
import DoneAllIcon from "@mui/icons-material/DoneAll";

export default function FinishModal({ open, handleClose }) {
  return (
    <Modal
      open={open}
      onClose={() => handleClose(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="popupFinish" style={{ textAlign: "center" }}>
        <h3>Certificate(s) Successfully Deployed!</h3>
        <DoneAllIcon sx={{ fontSize: "70px", color: "white" }} />
      </div>
    </Modal>
  );
}
