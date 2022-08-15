import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Title from "../Title";

export const query = graphql`
  {
    contentfulTitles {
      aboutTitle
    }
    allContentfulAboutMe(sort: { fields: contentful_id }) {
      nodes {
        aboutText
        id
      }
    }
    contentfulImages {
      aboutImage {
        gatsbyImageData(height: 480)
      }
    }
  }
`;

function AboutMe() {
  const data = useStaticQuery(query);
  const {
    contentfulTitles: { aboutTitle },
    allContentfulAboutMe: { nodes: aboutText },
    contentfulImages: { aboutImage },
  } = data;

  const myImage = getImage(aboutImage);

  return (
    <main>
      <section className="section about-page" id="about">
        <div className="section-center about-page">
          <Title title={aboutTitle} />
          {aboutText.map((item) => {
            return <p key={item.id}>{item.aboutText}</p>;
          })}
          <GatsbyImage image={myImage} alt="portfolio image of federico" />
        </div>
      </section>
    </main>
  );
}

export default AboutMe;
