import React from "react";
import { Link } from "gatsby";
import Title from "./Title";

const Projects = () => {
  const title = "My Personal Projects";

  return (
    <section className="section projects">
      <div className="section-center projects-center" />
      <Title title={title} />
      <Link to="/projects" className="btn center-btn">
        Coming Soon!
      </Link>
    </section>
  );
};

export default Projects;
