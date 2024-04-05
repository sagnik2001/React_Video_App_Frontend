import "./Main.css";
import Card from "./Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { base_url } from "../../app/base_url";
import Fab from "@mui/material/Fab";
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function Main() {
  const [data, setdata] = useState("");

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    axios
      .post(`${base_url}user/getdetails`, {
        id: userId,
      })
      .then((res) => {
        localStorage.setItem("userProfile",JSON.stringify(res.data))
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate("/");
  };

  console.log(data);

  return (
    <div className="App">
      <div className="main">
        <Fab
          variant="extended"
          style={{
            position: "absolute",
            left: "70%",
            top: "10%",
            textTransform: "capitalize",
          }}
          onClick={handleLogOut}
        >
          <BiLogOut /> &nbsp; LogOut
        </Fab>
        <div>
          <Card
            img={data[0]?.profilePicture}
            name={data[0]?.name}
            email={data[0]?.email}
            body={data[0]?.about}
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
