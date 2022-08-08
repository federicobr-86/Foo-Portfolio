import React from "react";
import { Link } from "gatsby";
import Footer from "../components/Footer";
import notFoundText from "../data/notFound";

const error = () => {
  const { not_found, go_back } = notFoundText;

  return (
    <main>
      <section className="section about-page">
        <div className="section-center about-page">
          <div className="error-page">
            <h1>{not_found}</h1>
            <Link to="/" className="btn">
              {go_back}
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default error;
