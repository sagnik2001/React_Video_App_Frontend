// import { Avatar, Typography } from "@mui/material";
// import { FiEdit } from "react-icons/fi";
// import { FaLongArrowAltRight } from "react-icons/fa";
// import "./Main.css";
// import { useNavigate } from "react-router-dom";

// const Card = ({ img, name, email, body }) => {
//   const navigate = useNavigate();

//   const handleEditNavigate = () => {
//     navigate("/create-profile", {
//       state: {
//         img: img,
//         name: name,
//         email: email,
//         body: body,
//       },
//     });
//   };

//   return (
//     <div id="main1"
//       style={{
//         display: "flex",
//         alignItems: "center",
//         flexDirection: "column",
//         textAlign: "center",
//         color: "gray",
//         maxWidth: "720px",
//       }}
//     >
//       <div className="profile_img">
//         <Avatar
//           src={img}
//           style={{
//             width: 300,
//             height: 300,
//           }}
//         />
//       </div>
//       <div className="info_div">
//         <div className="profile_bio">
//           <Typography className="profile_titles">{name}</Typography>
//         </div>
//         <div className="profile_bio">
//           <Typography className="profile_about">{body}</Typography>
//         </div>
//         <div className="profile_bio">
//           <Typography className="profile_emails">{email}</Typography>
//         </div>
//       </div>
//         <div style={{ display: "flex", gap: "15px", padding: "10px" }}>
//           <button
//             style={{ display: "flex", alignItems: "center", gap: "4px" }}
//             onClick={handleEditNavigate}
//           >
//             <FiEdit /> Edit Profile
//           </button>
//           <button
//             style={{ display: "flex", alignItems: "center", gap: "4px" }}
//             onClick={() => {
//               navigate("/rooms");
//             }}
//           >
//             Go To Roooms <FaLongArrowAltRight />
//           </button>
//         </div>

//     </div>
//   );
// };

// export default Card;

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
    <div
      id="main1"
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
            width: 300,
            height: 300,
          }}
        />
      </div>
      <div className="info_div">
        <div className="profile_bio">
          <Typography className="profile_titles">{name}</Typography>
        </div>
        <div className="profile_bio">
          {/* Apply styles to allow text wrapping */}
          <Typography
            className="profile_about"
            style={{ maxWidth: "100%", wordWrap: "break-word" }}
          >
            {body}
          </Typography>
        </div>
        <div className="profile_bio">
          <Typography className="profile_emails">{email}</Typography>
        </div>
      </div>
      <div style={{ display: "flex", gap: "15px", padding: "10px" }}>
        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            fontWeight: "bold",
            transition: "all 0.3s ease",
            padding: "8px",
            cursor: "pointer",
            border: "none",
            background: "transparent",
            color: "inherit",
            color: "#0077b6",
          }}
          onClick={handleEditNavigate}
        >
          <FiEdit /> Edit Profile
        </button>
        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            fontWeight: "bold",
            transition: "all 0.3s ease",
            padding: "8px",
            cursor: "pointer",
            border: "none",
            background: "transparent",
            color: "#0077b6",
          }}
          onClick={() => {
            navigate("/rooms");
          }}
        >
          Go To Roooms <FaLongArrowAltRight />
        </button>
      </div>
    </div>
  );
};

export default Card;
