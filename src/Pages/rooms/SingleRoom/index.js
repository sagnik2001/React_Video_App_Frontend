import React, { useState, useEffect } from "react";
import styles from "./SingleRoom.module.css";
import { useWebRTC } from "../../../Components/Hooks/useWebRTC";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { base_url } from "../../../app/base_url";
import { BsFillMicFill, BsFillMicMuteFill } from "react-icons/bs";
import { MdOutlineArrowBack } from "react-icons/md";
import { FaRegHandPeace } from "react-icons/fa"

const SingleRoom = () => {
  const id = useParams();
  const [isMuted, setMuted] = useState(true);

  const user = JSON.parse(localStorage.getItem("userProfile"));
  const location = useLocation();
  const { roomDetails } = location.state;

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

  const navigate = useNavigate();

  const handManualLeave = () => {
    navigate("/rooms");
  };

  return (
    <div>
      <div className="create-container">
        <button onClick={handManualLeave} className={styles.goBack}>
          <MdOutlineArrowBack size={35} />
          <span>All voice rooms</span>
        </button>
      </div>
      <div className={styles.clientsWrap}>
        <div className={styles.header}>
          {roomDetails && <h2 className={styles.topic}>{roomDetails.name}</h2>}
          <div className={styles.actions}>

            <button onClick={handManualLeave} className={styles.actionBtn}>
              <FaRegHandPeace size={35} />
              <span>Leave quietly</span>
            </button>
          </div>
        </div>
        {console.log(clients, "mu")}
        <div className={styles.clientsList}>
          {clients.map((client) => {
            { console.log(client) }
            return (
              <div className={styles.client} key={client.id}>
                <div className={styles.userHead}>
                  <img
                    className={styles.userAvatar}
                    src="https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2022/01/discord-logo-icon.jpg"
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
                    {isMuted ? <BsFillMicMuteFill /> : <BsFillMicFill />}
                  </button>
                </div>
                <h4 style={{ color: "white" }}>{client.name}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SingleRoom;
