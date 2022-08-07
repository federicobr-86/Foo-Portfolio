import React from "react";
import PropTypes from "prop-types";
import { AnchorLink } from "gatsby-plugin-anchor-links";

function LinkButton({ label, link }) {
  return <AnchorLink title={label} to={link} className="btn" />;
}

LinkButton.propTypes = {
  label: PropTypes.string,
  link: PropTypes.string.isRequired,
};

LinkButton.defaultProps = {
  label: "",
};

export default LinkButton;
