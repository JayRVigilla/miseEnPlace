import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="Footer">
      <div className="content">

        <h3>Chris Reed Music</h3>
      <div>
        <a href="/contact">
          <i className="far fa-envelope"></i>
          <p className="deets">chrisreed@email.net</p>
          </a>

        <a href="https://www.facebook.com/chrisreedmusic">
          <i className="fab fa-facebook"></i>
        <p className="deets">  Follow me on Facebook</p>
        </a>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
