import React from "react";
import { Link } from "gatsby";
import serviceData from "../../data/services";

const Services = () => {
  return (
    <section className="section bg-grey">
      <div className="service-title">
        <h2>My Services</h2>
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

export default Services;
