import React from "react";

import collage from "./../../assets/collage.png";

const Support = () => {
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
            <div className="singleInfo">
              <span className="number">01</span>
              <h4>Travel Requirements For Dubai</h4>
              <p>
                Find help with booking and travel plans, see what to expect
                along the journey to you favourite destinations
              </p>
            </div>

            <div className="singleInfo">
              <span className="number colorOne">02</span>
              <h4>Chauffeur Services at your arrival</h4>
              <p>
                {" "}
                Find help with booking and travel plans, see what to expect
                along the journey to you favourite destinations
              </p>
            </div>

            <div className="singleInfo">
              <span className="number colorTwo ">03</span>
              <h4>Multi Risk Travel Insurance</h4>
              <p>
                {" "}
                Find help with booking and travel plans, see what to expect
                along the journey to you favourite destinations
              </p>
            </div>
          </div>

          <div className="imgDiv">
            <img src={collage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
