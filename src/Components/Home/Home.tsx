import React from "react";

//Imported Assets
import planeVideo from "../../assets/sky-thru-window.mp4";
import planeImage from "../../assets/planeImage.jpeg";
const Home = () => {
  return (
    <div className="home flex container">
      <div className="mainText">
        <h1>Create Ever-lasting Memories With Us</h1>
      </div>

      <div className="homeImages flex">
        <div className="videoDiv">
          <video src={planeVideo} muted loop className="video"></video>
        </div>
      </div>
      {/* <img src={planeImage} alt="" className="plane" /> */}
    </div>
  );
};

export default Home;
