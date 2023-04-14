import { Avatar } from "@mui/material";

const Card = ({ img }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "gray",
      }}
    >
      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img}
        style={{
          width: 120,
          height: 120,
          padding: 7,
          marginBottom: 20,
        }}
      />
      <p style={{ fontStyle: "italic", marginTop: 25 }}>
        <span style={{ fontWeight: 500, color: "green" }}>Sagnik Pal</span>
      </p>
      <p>sagnikpal@gmail.com</p>
      <p>
        {" "}
        About Myself About Myself About Myself About Myself About Myself About
        Myself{" "}
      </p>
    </div>
  );
};

export default Card;
