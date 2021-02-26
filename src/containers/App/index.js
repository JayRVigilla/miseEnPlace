import React, {useState} from "react";
import { BrowserRouter } from 'react-router-dom'
import MobileNav from './../../components/MobileNav'
import Nav from './../../components/Nav'
import Routes from './../../routes.js'
import Footer from './../Footer'
import './App.css';
// require('dotenv').config()


function App() {
  const [navIn, setNavIn] = useState(false)
  const toggleMobNav = () => setNavIn(!navIn)
  const closeMobNav = () => navIn && setNavIn(false)

  return (
    <div className="App">
      <BrowserRouter>
        <Nav navIn={navIn} hideNav={closeMobNav}/>
        <div id="not-nav" onClick={closeMobNav}>
        <MobileNav toggleMobNav={toggleMobNav}/>
          <Routes />
        </div>
          <Footer/>
      </BrowserRouter>
      <div className="copyright">
        <a href='http://jayvigilla.com'>Design by Jay Vigilla</a>
      </div>
    </div>
  );
}

export default App;
