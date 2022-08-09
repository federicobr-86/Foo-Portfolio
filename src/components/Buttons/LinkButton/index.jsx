import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";

function LinkButton({ label, link }) {
  return (
    <Button
      href={link}
      variant="contained"
      size="large"
      aria-label="Press to go to contact form!"
    >
      {label}
    </Button>
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
