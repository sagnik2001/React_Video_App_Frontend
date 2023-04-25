import React, { useState, useEffect } from "react";
import styles from "./SingleRoom.module.css";
import { useWebRTC } from "../../../Components/Hooks/useWebRTC";
import { useParams } from "react-router-dom";
import axios from "axios";
import { base_url } from "../../../app/base_url";
import { BsFillMicFill, BsFillMicMuteFill } from "react-icons/bs";

const SingleRoom = () => {
  const id = useParams();
  const [isMuted, setMuted] = useState(true);

  const user = JSON.parse(localStorage.getItem("userProfile"));

  const { clients, provideRef, handleMute } = useWebRTC(id.id, user);

  useEffect(() => {
    handleMute(isMuted, user.id);
}, [isMuted]);

  const handleMuteClick = (clientId) => {
    if (clientId !== user.id) {
        return;
    }
    setMuted((prev) => !prev);
};

  return (
    <div>
      <div className={styles.clientsList}>
        {clients.map((client) => {
          return (
            <div className={styles.client} key={client.id}>
              <div className={styles.userHead}>
                <img
                  className={styles.userAvatar}
                  src={client.profilePicture}
                  alt=""
                />
                <audio
                  autoPlay
                  ref={(instance) => {
                    provideRef(instance, client.id);
                  }}
                />
                <button
                  onClick={() => handleMuteClick(client.id)}
                  className={styles.micBtn}
                >
                  {client.muted ? <BsFillMicMuteFill /> : <BsFillMicFill />}
                </button>
              </div>
              <h4 style={{ color: "white" }}>{client.name}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SingleRoom;
