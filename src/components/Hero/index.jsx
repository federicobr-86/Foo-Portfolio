import React from "react";
import LinkButton from "../Buttons/LinkButton";
import { StaticImage } from "gatsby-plugin-image";
import SocialLinks from "../Links/SocialLinks";
import text from "../../data/text";

const Hero = () => {
  const {
    hero_greeting,
    hero_title,
    hero_description,
    hero_contact,
    links_contact_url,
  } = text;

  return (
    <header className="hero">
      <section className="section-center hero-center">
        <article className="hero-info">
          <h3>{hero_greeting}</h3>
          <h2>{hero_title}</h2>
          <h2>{hero_description}</h2>
          <LinkButton text={hero_contact} link={links_contact_url} />
          <div className="hero-centered">
            <div className="hero-social">
              <SocialLinks />
            </div>
          </div>
        </article>
        <StaticImage
          src="../../images/programming.svg"
          alt="portfolio image of federico"
          className="hero-img"
          placeholder="blurred"
        />
      </section>
    </header>
  );
};

export default Hero;
