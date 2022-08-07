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
  label: PropTypes.string,
};

SubmitButton.defaultProps = {
  label: "",
};

export default SubmitButton;
