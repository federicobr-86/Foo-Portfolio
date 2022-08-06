import React from "react";
import PropTypes from "prop-types";

function SubmitButton({ label }) {
  return (
    <>
      <button type="submit" className="submit-btn btn">
        {label}
      </button>
    </>
  );
}

SubmitButton.propTypes = {
  text: PropTypes.string,
};

SubmitButton.defaultProps = {
  text: "",
};

export default SubmitButton;
