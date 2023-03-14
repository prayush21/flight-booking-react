import React, { useEffect } from "react";
import { RxCalendar } from "react-icons/rx";
import { BsBookmarkCheck, BsShieldCheck } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";

const Info = () => {
  useEffect(() => {
    Aos.init({ duration: 800 });
  });
  return (
    <div className="info section">
      <div className="infoContainer container">
        <div className="titleDiv flex">
          <h2 data-aos="fade-right" data-aos-duration="800">
            Travel to make memories around the world
          </h2>
          <button data-aos="fade-" data-aos-duration="800" className="btn">
            View All
          </button>
        </div>

        <div className="cardsDiv grid">
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className="singleCard grid"
          >
            <div className="iconDiv flex">
              <RxCalendar className="icon" />
            </div>
            <div className="cardTitle">Book & Relax</div>
            <p>
              You can also call airlines from your phone and book a flight
              ticket
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className="singleCard grid"
          >
            <div className="iconDiv flex colorOne">
              <BsShieldCheck className="icon" />
            </div>
            <div className="cardTitle">Smart Checklist</div>
            <p>
              You can also call airlines from your phone and book a flight
              ticket
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className="singleCard grid"
          >
            <div className="iconDiv flex colorTwo">
              <BsBookmarkCheck className="icon" />
            </div>
            <div className="cardTitle">Save More</div>
            <p>
              You can also call airlines from your phone and book a flight
              ticket
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
