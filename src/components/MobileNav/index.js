import React from "react";
import "./MobileNav.css";
import logo from './../../images/dvan.png';

function MobileNav({toggleMobNav}) {

  return (
    <div className="MobileNav">
      <div className="MobileNav content">
        <button onClick={toggleMobNav}><img src={logo} alt="conversation logo"/></button>
        <p className="h1"><b>Chris Reed</b></p>
      </div>
    </div>
  );
}

export default MobileNav;