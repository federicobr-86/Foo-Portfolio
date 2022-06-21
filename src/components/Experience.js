import React from "react";
import Title from "./Title";

const Experience = () => {
  const stackTitle = "Tech Stack";
  const stack = [
    {
      id: 1,
      title: "HTML5",
    },
    {
      id: 2,
      title: "CSS3",
    },
    {
      id: 3,
      title: "JavaScript",
    },
    {
      id: 4,
      title: "React",
    },
    {
      id: 5,
      title: "Gatsby",
    },
  ];

  return (
    <section className="section projects">
      <div className="section-center projects-center" />
      <article className="about-text">
        <Title title={stackTitle} />
        <div className="about-stack">
          {stack.map((item) => {
            return <span key={item.id}>{item.title}</span>;
          })}
        </div>
      </article>
    </section>
  );
};

export default Experience;
