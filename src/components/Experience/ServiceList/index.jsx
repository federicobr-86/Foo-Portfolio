import React from "react";
import { Link } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import { FaCode, FaUserTie } from "react-icons/fa";
import Title from "../../Title";

const query = graphql`
  {
    contentfulTitles {
      serviceTitle
      serviceFront
      serviceProject
    }
    contentfulText {
      serviceDescription
    }
  }
`;

const ServiceList = () => {
  const data = useStaticQuery(query);
  const {
    contentfulTitles: { serviceTitle, serviceFront, serviceProject },
    contentfulText: { serviceDescription },
  } = data;

  const serviceURL = "#about";
  const [frontDescription, projectDescription] = serviceDescription;

  return (
    <section className="section bg-grey">
      <div className="service-title">
        <Title title={serviceTitle} />
      </div>
      <div className="section-center services-center">
        <article className="service">
          <FaCode className="service-icon" />
          <Link to={serviceURL}>
            <h4>{serviceFront}</h4>
            <div className="underline"></div>
            <p>{frontDescription}</p>
          </Link>
        </article>

        <article className="service">
          <FaUserTie className="service-icon" />
          <Link to={serviceURL}>
            <h4>{serviceProject}</h4>
            <div className="underline"></div>
            <p>{projectDescription}</p>
          </Link>
        </article>
      </div>
    </section>
  );
};

export default ServiceList;
