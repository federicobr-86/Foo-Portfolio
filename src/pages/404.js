import React from "react";
import { Link } from "gatsby";

const Error = () => {
  return (
    <>
      <main className="error-page">
        <div className="error-container">
          <h1>Page not found!</h1>
          <Link to="/" className="btn">
            back home
          </Link>
        </div>
      </main>
    </>
  );
};

export default Error;
