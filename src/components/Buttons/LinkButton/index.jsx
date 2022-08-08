import React from "react";
import PropTypes from "prop-types";
import { StyledLinkButton } from "./LinkButtonStyles";
import { AnchorLink } from "gatsby-plugin-anchor-links";

function LinkButton({ label, link }) {
  return (
    <StyledLinkButton>
      <AnchorLink
        title={label}
        to={link}
        aria-label="Press to go to contact form!"
      />
    </StyledLinkButton>
  );
}

LinkButton.propTypes = {
  label: PropTypes.string,
  link: PropTypes.string.isRequired,
};

LinkButton.defaultProps = {
  label: "",
};

export default LinkButton;
