import React from "react";
import styles from "./Home.module.css";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../Components/Card/Card";
import Button from "../../Components/Button/Button";

const Home = () => {
  const signInLinkStyle = {
    color: "#0077ff",
    fontWeight: "bold",
    textDecoration: "none",
    marginLeft: "10px",
  };
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/register");
  };

  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to Chatter-Call">
        <p className={styles.text}>
          This is an audio calling website.Connect with your loved ones easily.
        </p>
        <div>
          <Button onClick={handleNavigate} text="Let's Go" />
        </div>
      </Card>
    </div>
  );
};

export default Home;
