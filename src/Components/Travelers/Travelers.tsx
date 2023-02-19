import React from "react";

import paris from "./../../assets/paris.jpeg";
import london from "./../../assets/london.jpeg";
import singapore from "./../../assets/singapore.jpeg";
import traveler1 from "./../../assets/person1.jpeg";
import traveler2 from "./../../assets/person2.jpeg";
import traveler3 from "./../../assets/person3.jpeg";

const Travelers = () => {
  const travelersArray = [
    {
      destImage: paris,
      travlerPic: traveler1,
      travelerName: "Bella Ramsey",
      socialId: "@BElla",
      id: 1,
    },
    {
      destImage: london,
      travlerPic: traveler2,
      travelerName: "Ellie Tyson",
      socialId: "@ellie",
      id: 1,
    },
    {
      destImage: singapore,
      travlerPic: traveler3,
      travelerName: "Trista Attenborugh",
      socialId: "@trista",
      id: 1,
    },
  ];

  return (
    <div className="travelers section container">
      <div className="sectionContainer">
        <h2>Top Travelers of this month!</h2>

        <div className="travelersContainer grid">
          {travelersArray.map(
            ({ id, destImage, travlerPic, travelerName, socialId }) => {
              return (
                <div className="singleTraveler" key={id}>
                  <img src={destImage} className="destinationImage" />
                  <div className="travelerDetails">
                    <div className="travelerPic">
                      <img src={travlerPic} alt="" />
                    </div>
                    <div className="travelerName">
                      <span>{travelerName}</span>
                      <p>{socialId}</p>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Travelers;
