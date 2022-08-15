import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import LinkButton from "../Buttons/LinkButton";
import SocialLinks from "../Links/SocialLinks";

const query = graphql`
  {
    allContentfulHeroInfo {
      nodes {
        heroInfo
      }
    }
  }
`;

const Hero = () => {
  const data = useStaticQuery(query);
  const {
    allContentfulHeroInfo: { nodes: heroInfo },
  } = data;

  const contactURL = "#contact";

  return (
    <header className="hero" id="home">
      <section className="section-center hero-center">
        <article className="hero-info">
          {heroInfo.map((item) => {
            return <h2 key={item.id}>{item.heroInfo}</h2>;
          })}
          <LinkButton link={contactURL} label="Contact!" tabIndex="0" />
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
