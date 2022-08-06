import React from "react";
import PropTypes from "prop-types";

function SubmitButton({ text }) {
  return (
    <>
      <button type="submit" className="submit-btn btn">
        {text}
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
