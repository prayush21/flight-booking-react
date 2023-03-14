import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Subscribe = () => {
  useEffect(() => {
    Aos.init({ duration: 800 });
  });
  return (
    <div className="subscribe section">
      <div
        data-aos="fade-up"
        data-aos-duration="800"
        className="sectionContainer container"
      >
        <h2>Subscribe NewsLetters & Get Latest Travel Updates</h2>
        <div className="inputDiv flex">
          <input type="email" placeholder="Enter your email address" />
          <button className="btn">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
