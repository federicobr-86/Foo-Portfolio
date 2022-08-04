import React from "react";
import { Link } from "gatsby";
import services from "../../data/services";

const Services = () => {
  return (
    <section className="section bg-grey">
      <div className="service-title">
        <h2>My Services</h2>
      </div>
      <div className="section-center services-center">
        {services.map((service) => {
          const { id, icon, title, text, url } = service;
          return (
            <article key={id} className="service">
              {icon}
              <h4>{title}</h4>
              <div className="underline"></div>
              <Link to={url}>
                <p>{text}</p>
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
