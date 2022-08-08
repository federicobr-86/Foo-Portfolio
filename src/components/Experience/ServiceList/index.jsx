import React from "react";
import { Link } from "gatsby";
import Title from "../../Title";
import serviceData from "../../../data/services";

const ServiceList = () => {
  return (
    <section className="section bg-grey">
      <div className="service-title">
        <Title title="My Services:" />
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
