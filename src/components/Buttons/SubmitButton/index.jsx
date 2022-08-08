import React from "react";
import PropTypes from "prop-types";
import { StyledSubmitButton } from "./SubmitButtonStyles";

function SubmitButton({ label }) {
  return (
    <>
      <StyledSubmitButton
        type="submit"
        className="submit-btn"
        aria-label="Press to submit!"
      >
        {label}
      </StyledSubmitButton>
    </>
  );
}

SubmitButton.propTypes = {
  label: PropTypes.string,
};

SubmitButton.defaultProps = {
  label: "",
};

export default SubmitButton;
