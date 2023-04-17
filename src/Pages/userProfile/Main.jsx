import "./Main.css";
import Card from "./Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { base_url } from "../../app/base_url";

function Main() {
  const [data, setdata] = useState("");

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    axios
      .post(`${base_url}user/getdetails`, {
        id: userId,
      })
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <div className="main">
        <div>
          <Card img={data.profilePicture} name={data.name} email={data.email} body={data.about} />
        </div>
      </div>
    </div>
  );
}

export default Main;
