import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";

const CreateRoom = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        style: {
          padding: "25px",
          maxWidth: "100%",
        },
      }}
    >
      <DialogContent>
        <div style={{marginBottom:'15px'}}>
          <input
            type="name"
            placeholder="Enter Room Name"
            name="email"
            style={{ border: "1px solid black" }}
          />
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
          <button style={{border:'1px solid purple'}}>Create</button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateRoom;
