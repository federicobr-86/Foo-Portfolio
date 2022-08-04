import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import social from "../../data/social_links";

const Hero = () => {
  return (
    <header className="hero">
      <section className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>Hi! I'm Federico</h1>
            <h4>Frontend Developer</h4>
            <Link to="/contact" className="btn">
              Contact me
            </Link>
            <div className="social-links">
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
