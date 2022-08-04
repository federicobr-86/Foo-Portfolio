import React from "react";
import Title from "../Title";
import { stackTitle, stackText } from "../../data/skills";

const Experience = () => {
  const experience_title = `${stackTitle}`;
  return (
    <section className="section projects">
      <div className="section-center projects-center" />
      <article className="about-text">
        <Title title={experience_title} />
        <div className="about-stack">
          {stackText.map((item) => {
            return <span key={item.id}>{item.title}</span>;
          })}
        </div>
      </article>
    </section>
  );
};

export default Experience;
