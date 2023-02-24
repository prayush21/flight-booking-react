import React, { useEffect } from "react";

//Imported Assets
import planeVideo from "../../assets/sky-thru-window.mp4";
import planeImage from "../../assets/planeImage.jpeg";

import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <div className="home flex container">
      <div className="mainText">
        <h1 data-aos="fade-up" data-aos-duration="2500">
          Create Ever-lasting Memories With Us
        </h1>
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
