import React from "react";
import Image1 from "../../Components/Images/checkimage.jpeg";

const CreateComponents = () => {
  return (
    <div>
      <div>
        <img src={Image1} alt="Upload" />
      </div>
      <div style={{ gap: "10px", display: "flex" }}>
        <label htmlFor="phoneNumber">Enter Name</label>
        <input
          type="email"
          placeholder="Enter Your Name"
          id="email"
          name="email"
        />
      </div>
    </div>
  );
};

export default CreateComponents;
