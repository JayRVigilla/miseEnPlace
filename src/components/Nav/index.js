import React from "react";
import "./Nav.css";
import logo from './../../images/dvan.png'

function Nav({navIn, hideNav}) {
  const xtra = navIn ? 'slide-in' : ''

  return (
    <div className={`Nav ${xtra}`}>
      <header className="nav header">
        <div className="nav logo">
            <img src={`${logo}`} alt="Avital Schlesinger MFT"/>
        </div>

        <div className='nav links'>
          <a onClick={hideNav} href='/'>Home</a>
          <a onClick={hideNav} href='/about'>About</a>
          <a onClick={hideNav} href='/press'>Press</a>
          <a onClick={hideNav} href='/contact'>Contact</a>
        </div>
      </header>
    </div>
  );
}

export default Nav;
