import React from "react";
import Title from "../components/Title";
import aboutImg from "../assets/images/about.jpg";

const About = () => {
  const title = "About me!";
  const intro =
    "Highly motivated Engineer with more than 10 years of experience in large scale projects";

  return (
    <>
      <section className="section projects">
        <div className="section-center projects-center">
          <Title title={title} />
          <p>{intro}</p>
          <img src={aboutImg} alt={title} className="about-img" />
        </div>
      </section>
    </>
  );
};

export default About;
