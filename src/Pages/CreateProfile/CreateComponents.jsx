import React, { useState } from "react";
import Image1 from "../../Components/Images/checkimage.jpeg";
// import "./CreateProfile.css";
import "./CreateComponents.css"
import axios from "axios";
import { base_url } from "../../app/base_url";
import { useLocation, useNavigate } from "react-router-dom";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { storage } from "../../Database/Firebase";
import { Avatar } from "@mui/material";

const CreateComponents = () => {
  const location = useLocation();

  const [image, setimage] = useState({ preview: "" });
  const [name, setName] = useState(
    location.state.name ? location.state.name : ""
  );
  const [desc, setDesc] = useState(
    location.state.body ? location.state.body : ""
  );
  const [email, setemail] = useState(
    location.state.email ? location.state.email : ""
  );

  const navigate = useNavigate();

  const handleImageChange = (e) => {
    if (e.target.files.length) {
      setimage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  const HandleCreateProfile = async () => {
    const id = localStorage.getItem("userId");
    let url;
    if (image.raw) {
      const imgRef = ref(
        storage,
        `images/${new Date().getTime()} - ${image.raw.name}`
      );
      const snap = await uploadBytes(imgRef, image.raw);
      const dlUrl = await getDownloadURL(ref(storage, snap.ref.fullPath));
      url = dlUrl;
      // console.log(image);
    }
    const body = {
      id,
      name,
      about: desc,
      email,
      profilePicture: url,
    };
    axios
      .post(`${base_url}user/update/`, body)
      .then((res) => {
        console.log(res);
        navigate("/userProfile");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div
     className="create-container">
      <div>
        <label htmlFor="upload-btn">
          {image?.preview ? (
            <Avatar
              src={image.preview}
              alt="Upload"
              style={{
                width: 300,
                height: 300,
                cursor: "pointer"
              }}
            />
          ) : (
            <Avatar
              src={location.state.img ? location.state.img : Image1}
              alt="Upload"
              style={{
                width: 300,
                height: 300,
                cursor: "pointer"
              }}
            />
          )}
          <input
            type="file"
            id="upload-btn"
            style={{ display: "none" }}
            onChange={(e) => handleImageChange(e)}
          />
        </label>
      </div>
      <div
        style={{
          gap: "6px",
          display: "flex",
          padding: "10px",
          flexDirection: 'column',
          width: '100%'
        }}
      >
        <label>Enter Name</label>
        <input
          type="name"
          placeholder="Enter Your Name"
          name="email"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div
        style={{
          gap: "6px",
          display: "flex",
          padding: "10px",
          flexDirection: 'column',
          width: '100%'
        }}
      >
        <label>Enter Email</label>
        <input
          type="email"
          placeholder="Enter Your Email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
      </div>
      <div style={{
        gap: "6px",
        display: "flex",
        padding: "10px",
        flexDirection: 'column',
        width: '100%'
      }}>
        <textarea
          type="name"
          placeholder="Enter Bio"
          name="email"
          rows={12}
          cols={40}
          className="txtarea"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
      </div>
      <div style={{ padding: "10px 10px 15px", width: '100%', display: 'flex', gap: '10px', justifyContent: 'end' }}>
        <button className="btn btn-primary"  onClick={(e) => {
          e.preventDefault()
          navigate(-1);
        }}>
          Go Back
        </button>
        <button className="btn btn-primary"  onClick={HandleCreateProfile}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateComponents;
