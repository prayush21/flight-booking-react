import React from "react";

import paris from "./../../assets/paris.jpeg";
import traveler1 from "./../../assets/person1.jpeg";

const Travelers = () => {
  return (
    <div className="travelers section container">
      <div className="sectionContainer">
        <h2>Top Travelers of this month!</h2>

        <div className="travelersContainer grid">
          <div className="singleTraveler">
            <img src={paris} className="destinationImage" />
            <div className="travelerDetails">
              <div className="travelerPic">
                <img src={traveler1} alt="" />
              </div>
              <div className="travelerName">
                <span>Bella Ramsey</span>
                <p>@BElla</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travelers;
