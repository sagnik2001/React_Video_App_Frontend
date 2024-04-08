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
import "../CreateProfile/CreateComponents.css"


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
      className="create-container profile-container"
      
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
        {/* Apply styles to allow text wrapping */}
        <p
          className="profile_about"
          style={{ maxWidth: "100%", wordWrap: "break-word" }}
        >
          {body}
        </p>
        <div className="profile_bio">
          <Typography className="profile_emails">{email}</Typography>
        </div>
        <div style={{ padding: "10px 10px 15px", width: '100%', display: 'flex', gap: '10px', justifyContent: 'end' }}>
          <button

            onClick={handleEditNavigate}
          >
            <FiEdit /> Edit Profile
          </button>
          <button

            onClick={() => {
              navigate("/rooms");
            }}
          >
            Go To Roooms <FaLongArrowAltRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
