import React, { useEffect } from "react";

import collage from "./../../assets/collage.png";
import Aos from "aos";
import "aos/dist/aos.css";
const Support = () => {
  useEffect(() => {
    Aos.init({ duration: 800 });
  });

  return (
    <div className="support container section">
      <div className="sectionContainer">
        <div className="titlesDiv">
          <small>travel support</small>
          <h2>Plan Your Travel With Confidence</h2>
          <p>
            Find Help with booking and travel plans, see what to expect along
            the journey
          </p>
        </div>
        <div className="infoDiv grid">
          <div className="textDiv grid">
            <div
              data-aos="fade-down"
              data-aos-duration="800"
              className="singleInfo"
            >
              <span className="number">01</span>
              <h4>Travel Requirements For Dubai</h4>
              <p>
                Find help with booking and travel plans, see what to expect
                along the journey to you favourite destinations
              </p>
            </div>

            <div
              data-aos="fade-down"
              data-aos-duration="800"
              className="singleInfo"
            >
              <span className="number colorOne">02</span>
              <h4>Chauffeur Services at your arrival</h4>
              <p>
                {" "}
                Find help with booking and travel plans, see what to expect
                along the journey to you favourite destinations
              </p>
            </div>

            <div
              data-aos="fade-down"
              data-aos-duration="800"
              className="singleInfo"
            >
              <span className="number colorTwo ">03</span>
              <h4>Multi Risk Travel Insurance</h4>
              <p>
                {" "}
                Find help with booking and travel plans, see what to expect
                along the journey to you favourite destinations
              </p>
            </div>
          </div>

          <div data-aos="fade-left" data-aos-duration="800" className="imgDiv">
            <img src={collage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
