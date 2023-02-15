import React from "react";
import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";

import bluePlaneLogo from "../../assets/bluePlaneLogo.png";

const Navbar = () => {
  return (
    <div className="navBar flex">
      <div className="navBarOne flex">
        <div>
          <SiConsul className="icon" />
        </div>
        <div className="none flex">
          <div className="flex">
            <li className="flex">
              {" "}
              <BsPhoneVibrate className="icon" /> Support
            </li>
          </div>
          <div className="flex">
            <li className="flex">
              <AiOutlineGlobal className="icon" />
              Languages
            </li>
          </div>
        </div>
        <div className="atb flex">
          <span>Sign In</span>
          <span>Sign Out</span>
        </div>
      </div>

      <div className="navBarTwo flex">
        <div className="logoDiv">
          <img src={bluePlaneLogo} alt="logo" className="logo" />
        </div>
        <div className="navBarMenu">
          <ul className="menu flex">
            <li className="listItem">Home</li>
            <li className="listItem">About</li>
            <li className="listItem">Offers</li>
            <li className="listItem">Seats</li>
            <li className="listItem">Destinations</li>
          </ul>
        </div>

        <button className="btn flex btnOne">Contacts</button>
        {/* <button className="btn flex btnTwo">Contacts</button> */}

        <div className="toggleIcon">
          <CgMenuGridO />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
