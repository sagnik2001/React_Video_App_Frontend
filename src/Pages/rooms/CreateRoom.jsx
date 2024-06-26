import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { base_url } from "../../app/base_url";
import axios from "axios";
import { toast } from "react-toastify";

const CreateRoom = ({ open, handleClose, getRooms }) => {
  const [room, setroom] = useState("");

  const handleClick = () => {
    const userId = JSON.parse(localStorage.getItem("userId"));
    axios
      .post(`${base_url}rooms/createroom`, {
        createdBy: userId,
        name: room,
      })
      .then((res) => {
        console.log(res);
        toast.success('Room successfully created', {
          position: "top-right",
          autoClose: 3000, // Close the popup after 3000 milliseconds (adjust as needed)
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        })
        handleClose()
        getRooms();
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
        <div style={{ marginBottom: "15px" }}>
          <input
            type="name"
            placeholder="Enter Room Name"
            style={{ border: "1px solid black" }}
            value={room}
            onChange={(e) => {
              setroom(e.target.value);
            }}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            style={{ border: "1px solid purple" }}
            onClick={(e) => {
              e.preventDefault();
              handleClick();
            }}
          >
            Create
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateRoom;
