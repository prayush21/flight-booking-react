import React, { useEffect, useState } from "react";
import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import topGunLogo from "../../assets/topGun.png";
import bluePlaneLogo from "../../assets/bluePlaneLogo.png";

const Navbar = () => {
  const [active, setActive] = useState("navBarMenu");
  const [navBarBg, setNavbarBg] = useState("navBarTwo");

  const showNavbar = () => {
    setActive("navBarMenu showNavBar");
  };

  const removeNavbar = () => {
    setActive("navBarMenu");
  };

  useEffect(() => {
    const addBgColor = () => {
      if (window.scrollY >= 10) {
        setNavbarBg("navBarTwo navBarWithBg");
      } else {
        setNavbarBg("navBarTwo");
      }
    };

    window.addEventListener("scroll", addBgColor);
    return () => {
      window.removeEventListener("scroll", addBgColor);
    };
  }, []);

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

      <div className={`${navBarBg} flex`}>
        <div className="logoDiv">
          <img src={topGunLogo} alt="logo" className="logo" />
        </div>
        <div className={active}>
          <ul className="menu flex" onClick={removeNavbar}>
            <li className="listItem">Home</li>
            <li className="listItem">About</li>
            <li className="listItem">Offers</li>
            <li className="listItem">Seats</li>
            <li className="listItem">Destinations</li>
          </ul>
          <button className="btn flex btnOne">Contact</button>
        </div>

        <button className="btn flex btnTwo">Contact</button>

        <div className="toggleIcon">
          <CgMenuGridO onClick={showNavbar} className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
