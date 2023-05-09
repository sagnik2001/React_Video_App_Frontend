import React, { useState, useEffect } from "react";
import "./Rooms.css";
import { Fab } from "@mui/material";
import { GrAdd } from "react-icons/gr";
import CreateRoom from "./CreateRoom";
import axios from "axios";
import { base_url } from "../../app/base_url";
import { useNavigate } from "react-router-dom";
import {TfiViewListAlt} from "react-icons/tfi"

const Rooms = () => {
  const [open, setOpen] = useState(false);
  const [rooms, setRooms] = useState([]);

  const [createrName, setcreaterName] = useState([]);
  const userId = JSON.parse(localStorage.getItem("userId")).toString();

  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem("userId"));

    axios
      .post(`${base_url}rooms/getrooms`, {
        userId: userId,
      })
      .then((res) => {
        setRooms(res.data);
        for (var i = 0; i < res.data.length; i++) {
          axios
            .post(`${base_url}user/getdetails`, {
              id: res.data[i].created_By,
            })
            .then((res) => {
              setcreaterName((old) => [...old, res.data.name]);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const navigate = useNavigate();

  return (
    <div className="Room_Container">
      <div style={{ padding: "25px" }}>
        <h1>ROOMS</h1>
      </div>

      <div className="container">
        {rooms?.map((res, keys) => (
          <div
            className="card-container"
            onClick={(e) => {
              e.preventDefault();
              navigate(`/room/${res._id}`, { state: { roomDetails: res } });
            }}
          >
            <div class="grid-container">
              <div class="grid-item">
                <h2>Room Name : </h2>
              </div>
              <div class="grid-item">
                <div className="card-name">
                  <h2>{res.name}</h2>
                </div>
              </div>
              <div class="grid-item">
                <h2>Participants : </h2>
              </div>
              <div class="grid-item">
                <div className="card-participants">
                  <h2>{res.participants.length}</h2>
                </div>
              </div>
              <div class="grid-item">
                <h2>CreatedBy : </h2>
              </div>
              <div class="grid-item">
                <div className="card-participants">
                  <h2>{createrName[keys]}</h2>
                </div>
              </div>
            </div>
            {res.created_By !== userId && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "5px",
                  gap: "10px",
                }}
              >
                <button>Joined</button>
                <button>Leave</button>
              </div>
            )}
            {res.created_By === userId && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "5px",
                  gap: "10px",
                }}
              >
                <button>Delete</button>
              </div>
            )}
          </div>
        ))}
      </div>
      <Fab
        variant="add"
        style={{
          position: "absolute",
          left: "90%",
          top: "80%",
          textTransform: "capitalize",
          display:'flex',
          gap:'10px'
        }}
      >
        <TfiViewListAlt size={25} />
      </Fab>

      <Fab
        aria-label="add"
        style={{
          position: "absolute",
          left: "90%",
          top: "90%",
          textTransform: "capitalize",
        }}
      >
        <GrAdd size={25} onClick={handleClickOpen} />
      </Fab>
      <CreateRoom open={open} handleClose={handleClose} />
    </div>
  );
};

export default Rooms;
