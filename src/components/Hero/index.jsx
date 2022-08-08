import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import LinkButton from "../Buttons/LinkButton";
import SocialLinks from "../Links/SocialLinks";

export const query = graphql`
  {
    allContentfulHeroTitle {
      nodes {
        aboutTitle
        id
      }
    }
    contentfulContactHero {
      contactHeroLink
    }
  }
`;

const Hero = () => {
  const data = useStaticQuery(query);
  const {
    allContentfulHeroTitle: { nodes: aboutTitle },
    contentfulContactHero: { contactHeroLink },
  } = data;

  return (
    <header className="hero" id="home">
      <section className="section-center hero-center">
        <article className="hero-info">
          {aboutTitle.map((item) => {
            return <h2 key={item.id}>{item.aboutTitle}</h2>;
          })}
          <LinkButton label="Contact!" link={contactHeroLink} />
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
