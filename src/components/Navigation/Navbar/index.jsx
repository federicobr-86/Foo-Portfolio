import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { FaAlignRight } from "react-icons/fa";
import SectionLinks from "../../Links/SectionLinks";

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <a href="/">
            <StaticImage
              src="../../../assets/images/logo.png"
              alt="Portfolio logo Foo Dev"
              className="nav-header img"
              placeholder="blurred"
            />
          </a>
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight />
          </button>
        </div>
        <div className="nav-links">
          <SectionLinks />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
