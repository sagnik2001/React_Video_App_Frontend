import { Avatar, Typography } from "@mui/material";
import { FiEdit } from "react-icons/fi";
import { FaLongArrowAltRight } from "react-icons/fa";
import "./Main.css";
import { useNavigate } from "react-router-dom";

const Card = ({ img, name, email, body }) => {
  const navigate = useNavigate();

  const handleEditNavigate = () => {
    navigate("/create-profile", {
      state: {
        img: img,
        name: name,
        email: email,
        body: body,
      },
    });
  };

  return (
    <>
    <div className="main_div"
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "row", //modi
        textAlign: "center",
        color: "gray",
        maxWidth: "720px",
      }}
    >
      <div className="one">
      <div className="profile_img">
        <Avatar
          src={img}
          style={{
            width: 220,
            height: 220,
          }} />
      </div>
      <div className="profile_bio">
        <Typography className="profile_titles">{name}</Typography>
      </div>
    </div>
    <div className="two">
        <div className="profile_bio">
          <Typography className="profile_about">{body}</Typography>
        </div>
        <div className="profile_bio">
          <Typography className="profile_emails">{email}</Typography>
        </div>
        
        <div style={{ display: "flex", gap: "15px", padding: "10px" }}>
          <button
            style={{ display: "flex", alignItems: "center", gap: "4px" }}
            onClick={handleEditNavigate}
          >
            <FiEdit /> Edit Profile
          </button>
          <button
            style={{ display: "flex", alignItems: "center", gap: "4px" }}
            onClick={() => {
              navigate("/rooms");
            } }
          >
            Go To Roooms <FaLongArrowAltRight />
          </button>
        </div>
      </div>
      </div>
      </>
  );
};

export default Card;


// import React, { useState } from 'react';
// // import './UserProfile.css'; // Import CSS file

// const Card = () => {
//   const [user, setUser] = useState({
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//     bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     profilePicture: 'https://via.placeholder.com/150',
//   });

//   const handleEditProfile = () => {
//     console.log('Edit profile clicked');
//   };

//   const handleGoToRooms = () => {
//     console.log('Go to rooms clicked');
//   };

//   return (
//     <div className="user-profile">
//       <img src={user.profilePicture} alt="Profile" className="profile-picture" />
//       <div className="user-details">
//         <h2>{user.name}</h2>
//         <p>{user.email}</p>
//         <p>{user.bio}</p>
//         <button onClick={handleEditProfile}>Edit Profile</button>
//         <button onClick={handleGoToRooms}>Go to Rooms</button>
//       </div>
//     </div>
//   );
// };

// export default Card;

