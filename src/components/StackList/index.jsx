import React from "react";
import Title from "../Title";
import { stackTitle, stackText } from "../../data/stack";

const StackList = () => {
  const experience_title = `${stackTitle}`;
  return (
    <section className="experience-page">
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
    </section>
  );
};

export default StackList;
