import React from "react";
import Title from "../components/Title/index";
import aboutImg from "../assets/images/about.jpg";

const About = () => {
  const title = "About me!";
  const intro =
    "Passionate about programming languages and computers since 1995.";
  const experienced =
    "Since then, I became a highly motivated engineer with more than 10 years of experience in large scale projects.";
  const now = "Currently working with mainly with React, Gatsby and CMS.";

  return (
    <>
      <section className="section projects">
        <div className="section-center projects-center">
          <Title title={title} />
          <p>{intro}</p>
          <p>{experienced}</p>
          <img src={aboutImg} alt={title} className="about-img" />
          <p>{now}</p>
        </div>
      </section>
    </>
  );
};

export default About;
