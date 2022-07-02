import React from "react";
import Title from "./Title";

const Experience = () => {
  const stackTitle = "Tech skills:";
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
      title: "React.js",
    },
    {
      id: 5,
      title: "Gatsby",
    },
    {
      id: 6,
      title: "GraphQL",
    },
    {
      id: 7,
      title: "REST API",
    },
    {
      id: 8,
      title: "CMS",
    },
    {
      id: 9,
      title: "GIT",
    },
    {
      id: 10,
      title: "Scrum",
    },
    {
      id: 11,
      title: "Project Management",
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
