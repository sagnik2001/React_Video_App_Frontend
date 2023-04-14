import "./Main.css";
import Card from "./Card";

function Main() {
  return (
    <div>
      <div
        className="main"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          marginTop: 50,

          boxShadow: "1px 2px 9px #0077b6",

          margin: "0.2rem",
          padding: "1rem",
        }}
      >
        <div style={{ width: "50%", textAlign: "center" }}>
          <Card img="https://www.tutorialrepublic.com/examples/images/clients/5.jpg" />
        </div>
      </div>
    </div>
  );
}

export default Main;
