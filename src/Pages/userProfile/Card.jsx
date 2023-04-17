import { Avatar, Typography } from "@mui/material";
import { FiEdit } from "react-icons/fi";
import "./Main.css";

const Card = ({ img, name, email, body }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "gray",
        maxWidth: "720px",
      }}
    >
      <div className="profile_img">
        <Avatar
          src={img}
          style={{
            width: 320,
            height: 320,
          }}
        />
      </div>
      <div className="profile_bio">
        <Typography className="profile_titles">{name}</Typography>
      </div>
      <div className="profile_bio">
        <Typography className="profile_emails">{email}</Typography>
      </div>
      <div className="profile_bio">
        <Typography className="profile_about">{body}</Typography>
      </div>
      <div style={{ display: "flex", gap: "15px" ,padding:'10px'}}>
        <button type="submit">Edit Profile</button>
        <button type="submit">Go To Roooms </button>
      </div>
    </div>
  );
};

export default Card;
