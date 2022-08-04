import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import social from "../../data/social_links";
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
              {social.map((link) => {
                return (
                  <a href={link.url} key={link.id} className="social-link">
                    {link.icon}
                  </a>
                );
              })}
            </div>
          </div>
        </article>
        <StaticImage
          src="../../assets/images/programming.svg"
          alt="portfolio"
          className="hero-img"
          placeholder="blurred"
        />
      </section>
    </header>
  );
};

export default Hero;
