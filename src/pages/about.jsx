import React from "react";
import Title from "../components/Title/index";
import text from "../data/text";
import aboutImg from "../assets/images/about.jpg";

const About = () => {
  const { about_title, about_intro, about_experience, about_currently } = text;
  const title = `${about_title}`;

  return (
    <>
      <section className="section about-page">
        <div className="section-center about-page">
          <Title title={about_title} />
          <p>{about_intro}</p>
          <p>{about_experience}</p>
          <p>{about_currently}</p>
          <img src={aboutImg} alt={title} className="about-img" />
        </div>
      </section>
    </>
  );
};

export default About;
