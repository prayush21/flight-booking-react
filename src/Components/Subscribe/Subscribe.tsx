import React from "react";

const Subscribe = () => {
  return (
    <div className="subscribe section">
      <div className="sectionContainer container">
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
