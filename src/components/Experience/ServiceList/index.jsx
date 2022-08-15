import React from "react";
import { Link } from "gatsby";
import { graphql, useStaticQuery } from "gatsby";
import Title from "../../Title";
import serviceData from "../../../data/services";

const query = graphql`
  {
    contentfulTitles {
      serviceTitle
    }
  }
`;

const ServiceList = () => {
  const data = useStaticQuery(query);
  const {
    contentfulTitles: { serviceTitle },
  } = data;

  return (
    <section className="section bg-grey">
      <div className="service-title">
        <Title title={serviceTitle} />
      </div>
      <div className="section-center services-center">
        {serviceData.map((service) => {
          const { id, icon, title, text, url } = service;
          return (
            <article key={id} className="service">
              {icon}
              <Link to={url}>
                <h4>{title}</h4>
                <div className="underline"></div>
                <p>{text}</p>
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default ServiceList;
