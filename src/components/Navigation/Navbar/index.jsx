import React from "react";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FaAlignRight } from "react-icons/fa";
import SectionLinks from "../../Links/SectionLinks";

const query = graphql`
  {
    contentfulImages {
      logoImage {
        gatsbyImageData(height: 80, width: 200)
      }
    }
  }
`;

const Navbar = ({ toggleSidebar }) => {
  const data = useStaticQuery(query);
  const {
    contentfulImages: { logoImage },
  } = data;

  const logo = getImage(logoImage);

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <a href="/">
            <GatsbyImage image={logo} alt="Navigation bar Logo Foo Dev" />
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

Navbar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};

Navbar.defaultProps = {};

export default Navbar;
