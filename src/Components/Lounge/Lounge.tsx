import React from "react";

import collage from "./../../assets/collage.png";

const Lounge = () => {
  return (
    <div className="lounge section contianer">
      <div className="sectionContainer grid">
        <div className="imgDiv">
          <img src={collage} alt="lounge images" />
        </div>

        <div className="textDiv">
          <h2>Unaccompanied Minor Lounge</h2>
          <div className="grids grid">
            <div className="singleGrid">
              <div className="gridTitle">Help through the airport</div>
              <p>
                You can also call airlines from your phone and book a flight
                ticket
              </p>
            </div>

            <div className="singleGrid">
              <div className="gridTitle">Priority Boarding</div>
              <p>
                You can also call airlines from your phone and book a flight
                ticket
              </p>
            </div>

            <div className="singleGrid">
              <div className="gridTitle">Care on the flight</div>
              <p>
                You can also call airlines from your phone and book a flight
                ticket
              </p>
            </div>

            <div className="singleGrid">
              <div className="gridTitle">Chauffeur Drive Service</div>
              <p>
                You can also call airlines from your phone and book a flight
                ticket
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lounge;
