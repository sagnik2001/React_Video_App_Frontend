import React, { useState, useEffect } from "react";
import styles from "./SingleRoom.module.css";
import { useWebRTC } from "../../../Components/Hooks/useWebRTC";
import { useParams } from "react-router-dom";
import axios from "axios";
import { base_url } from "../../../app/base_url";

const SingleRoom = () => {
  const id = useParams();

  const user = JSON.parse(localStorage.getItem("userProfile"));

  const { clients, provideRef, handleMute } = useWebRTC(id.id, user);

  return (
    <div className={styles.container}>
      {clients.map((client) => {
        return (
          <div className={styles.client} key={client.id}>
            <div className={styles.userHead}>
              <img className={styles.userAvatar} src={client.profilePicture} alt="" />
              <audio
                autoPlay
                ref={(instance) => {
                  provideRef(instance, client.id);
                }}
              />
              <button
                // onClick={() => handleMuteClick(client.id)}
                className={styles.micBtn}
              >
                {client.muted ? (
                  <img
                    className={styles.mic}
                    src="/images/mic-mute.png"
                    alt="mic"
                  />
                ) : (
                  <img
                    className={styles.micImg}
                    src="/images/mic.png"
                    alt="mic"
                  />
                )}
              </button>
            </div>
            <h4>{client.name}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default SingleRoom;
