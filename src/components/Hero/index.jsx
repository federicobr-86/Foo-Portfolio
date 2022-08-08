import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import LinkButton from "../Buttons/LinkButton";
import SocialLinks from "../Links/SocialLinks";
import links from "../../data/links";

export const query = graphql`
  {
    allContentfulHeroTitle {
      nodes {
        aboutTitle
        id
      }
    }
  }
`;

const Hero = () => {
  const data = useStaticQuery(query);
  const {
    allContentfulHeroTitle: { nodes: aboutTitle },
  } = data;

  const { links_contact_url } = links;

  return (
    <header className="hero" id="home">
      <section className="section-center hero-center">
        <article className="hero-info">
          {aboutTitle.map((item) => {
            return <h2 key={item.id}>{item.aboutTitle}</h2>;
          })}
          <LinkButton label="Contact!" link={links_contact_url} />
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
