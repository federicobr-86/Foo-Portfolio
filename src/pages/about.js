import React from "react";
import Title from "../components/Title";

const About = () => {
  const title = "About me!";

  return (
    <>
      <section className="about-page">
        <div className="section-center about-center">
          <article className="about-text">
            <Title title={title} />
            <p>Coming soon!</p>
            <div className="about-stack">Tech Stack info goes here...</div>
          </article>
        </div>
      </section>
    </>
  );
};

export default About;
