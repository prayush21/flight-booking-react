import React, { useEffect } from "react";
import topGunLogo from "../../assets/topGun.png";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";

import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <div className="footer">
      <div
        data-aos="fade-up"
        data-aos-duration="2500"
        className="sectionContainer container grid"
      >
        <div className="gridOne grid">
          <div className="logoDiv">
            <img src={topGunLogo} alt="" />
          </div>
          <p>Your mind is stronger than your feeelings, fly!</p>
          <div className="socialIcon flex">
            <TiSocialFacebook className="icon" />
            <TiSocialTwitter className="icon" />
            <TiSocialInstagram className="icon" />
          </div>
        </div>
        <div className="footerLinks">
          <span className="linkTitle">Information</span>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">Flight Status</a>
          </li>
          <li>
            <a href="#">Travel</a>
          </li>
          <li>
            <a href="#">Check In</a>
          </li>
        </div>
        <div className="footerLinks">
          <span className="linkTitle">Quick Guide</span>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">How To</a>
          </li>
          <li>
            <a href="#">Baggage</a>
          </li>
          <li>
            <a href="#">Route Map</a>
          </li>
          <li>
            <a href="#">Out Communities</a>
          </li>
        </div>
        <div className="footerLinks">
          <span className="linkTitle">Information</span>
          <li>
            <a href="#">Chauffeur</a>
          </li>
          <li>
            <a href="#">Our Partners</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Destinations</a>
          </li>
          <li>
            <a href="#">Transportation</a>
          </li>
        </div>
      </div>

      <div className="copyRightDiv flex">
        <p>
          Courtesy Developed By{" "}
          <a href="mailto:prayushdave@gmail.com">Prayush</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
