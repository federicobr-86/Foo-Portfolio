import React from "react";
import { Link } from "gatsby";
import text from "../data/text";

const Error = () => {
  const { not_found, go_back } = text;

  return (
    <>
      <main className="error-page">
        <div className="error-container">
          <h1>{not_found}</h1>
          <Link to="/" className="btn">
            {go_back}
          </Link>
        </div>
      </main>
    </>
  );
};

export default Error;
