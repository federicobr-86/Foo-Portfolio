import React from "react";

function SubmitButton({ text }) {
  return (
    <>
      <button type="submit" className="submit-btn btn">
        {text}
      </button>
    </>
  );
}

export default SubmitButton;
