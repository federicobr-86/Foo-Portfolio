import React from "react";
import SocialLinks from "../SocialLinks";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div className="footer-links social-links">
          <SocialLinks />
        </div>
        <h4>
          copyright &copy; {new Date().getFullYear()}
          <span> FooDev</span> all rights reserved
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
