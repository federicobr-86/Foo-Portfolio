import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Title from "../Title";

const query = graphql`
  {
    allContentfulAboutMe {
      nodes {
        id
        aboutText
      }
    }
    contentfulAboutTitle {
      aboutTitle
    }
  }
`;

function AboutMe() {
  const data = useStaticQuery(query);
  const {
    allContentfulAboutMe: { nodes: aboutText },
    contentfulAboutTitle: { aboutTitle },
  } = data;

  return (
    <main>
      <section className="section about-page">
        <div className="section-center about-page">
          <Title title={aboutTitle} />
          {aboutText.map((item) => {
            return <p key={item.id}>{item.aboutText}</p>;
          })}
          <StaticImage
            src="../../images/about.JPG"
            alt="portfolio image of federico"
            className="about-img"
            placeholder="blurred"
          />
        </div>
      </section>
    </main>
  );
}

export default AboutMe;
