import React from "react";
import { Link } from "gatsby";

const Projects = () => {
  return (
    <section className="section projects">
      <div className="section-center projects-center">Project Page</div>
      <Link to="/projects" className="btn center-btn">
        projects
      </Link>
    </section>
  );
};

export default Projects;
