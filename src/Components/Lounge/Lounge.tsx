import React, { useEffect } from "react";

import collage from "./../../assets/collage.png";
import Aos from "aos";
import "aos/dist/aos.css";
const Lounge = () => {
  useEffect(() => {
    Aos.init({ duration: 800 });
  });

  return (
    <div className="lounge container section">
      <div className="sectionContainer grid">
        <div data-aos="fade-left" data-aos-duration="800" className="imgDiv">
          <img src={collage} alt="lounge images" />
        </div>

        <div data-aos="fade-down" data-aos-duration="800" className="textDiv">
          <h2>Unaccompanied Minor Lounge</h2>
          <div className="grids grid">
            <div
              data-aos="fade-down"
              data-aos-duration="800"
              className="singleGrid"
            >
              <div className="gridTitle">Help through the airport</div>
              <p>
                You can also call airlines from your phone and book a flight
                ticket
              </p>
            </div>

            <div
              data-aos="fade-down"
              data-aos-duration="800"
              className="singleGrid"
            >
              <div className="gridTitle">Priority Boarding</div>
              <p>
                You can also call airlines from your phone and book a flight
                ticket
              </p>
            </div>

            <div
              data-aos="fade-down"
              data-aos-duration="800"
              className="singleGrid"
            >
              <div className="gridTitle">Care on the flight</div>
              <p>
                You can also call airlines from your phone and book a flight
                ticket
              </p>
            </div>

            <div
              data-aos="fade-down"
              data-aos-duration="800"
              className="singleGrid"
            >
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
