import React, { useState, useEffect } from "react";
import "./Rooms.css";
import { Fab } from "@mui/material";
import { GrAdd } from "react-icons/gr";
import CreateRoom from "./CreateRoom";
import axios from "axios";
import { base_url } from "../../app/base_url";
import { useNavigate } from "react-router-dom";

const Rooms = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [rooms, setRooms] = useState([]);
  const [createrName, setcreaterName] = useState([]);
  const userId = JSON.parse(localStorage.getItem("userId")).toString();
  const navigate = useNavigate();

  const getRooms = () => {
    setLoading(true);
    axios
      .get(`${base_url}rooms/getAllRooms/`)
      .then((res) => {
        setRooms(res.data);
        Promise.all(
          res.data.map((room) =>
            axios
              .post(`${base_url}user/getdetails`, {
                id: room.created_By,
              })
              .then((res) => res.data.name)
          )
        ).then((names) => {
          setcreaterName(names);
          setLoading(false);
        });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    getRooms();
  }, []);

  const handleClickToJoin = (roomId) => {
    const userId = JSON.parse(localStorage.getItem("userId"));
    axios
      .post(`${base_url}rooms/joinroom/`, {
        roomId: roomId,
        userId: userId,
      })
      .then((res) => {
        if (res.status === 200) {
          getRooms();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="Room_Container">
      <div style={{ padding: "25px" }}>
        <h1>CHAT ROOMS</h1>
      </div>

      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        <div className="container">
          {rooms?.map((res, keys) => (
            <div
              className="card-container"
              onClick={(e) => {
                e.preventDefault();
                if (!res?.participants.includes(userId)) return;
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
                  {res?.participants.includes(userId) ? (
                    <button>Joined</button>
                  ) : (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleClickToJoin(res?._id);
                      }}
                    >
                      Join
                    </button>
                  )}
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
      )}

      <div className="fab-container">
        <Fab
          aria-label="add"
          style={{
            textTransform: "capitalize",
          }}
        >
          <GrAdd size={25} onClick={handleClickOpen} />
        </Fab>
      </div>
      <CreateRoom open={open} handleClose={handleClose} getRooms={getRooms} />
    </div>
  );
};

export default Rooms;
