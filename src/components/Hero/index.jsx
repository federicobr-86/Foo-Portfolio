import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import SocialLinks from "../SocialLinks";
import text from "../../data/text";

const Hero = () => {
  const { hero_greeting, hero_title, hero_description, hero_contact } = text;

  return (
    <header className="hero">
      <section className="section-center hero-center">
        <article className="hero-info">
          <h3>{hero_greeting}</h3>
          <h2>{hero_title}</h2>
          <h2>{hero_description}</h2>
          <Link to="/contact" className="btn">
            {hero_contact}
          </Link>
          <div className="hero-centered">
            <div className="hero-social">
              <SocialLinks />
            </div>
          </div>
        </article>
        <StaticImage
          src="../../assets/images/programming.svg"
          alt="portfolio image of federico"
          className="hero-img"
          placeholder="blurred"
        />
      </section>
    </header>
  );
};

export default Hero;
