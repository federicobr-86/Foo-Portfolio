import React from "react";
import SocialLinks from "../SocialLinks";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div className="footer-links social-links">
          <SocialLinks />
        </div>
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
