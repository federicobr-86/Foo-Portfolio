import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
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
    contentfulAboutImage {
      myImage {
        gatsbyImageData(height: 480)
      }
    }
  }
`;

function AboutMe() {
  const data = useStaticQuery(query);
  const {
    allContentfulAboutMe: { nodes: aboutText },
    contentfulAboutTitle: { aboutTitle },
    contentfulAboutImage: { myImage },
  } = data;

  const aboutImage = getImage(myImage);

  return (
    <main>
      <section className="section about-page" id="about">
        <div className="section-center about-page">
          <Title title={aboutTitle} />
          {aboutText.map((item) => {
            return <p key={item.id}>{item.aboutText}</p>;
          })}
          <GatsbyImage image={aboutImage} alt="portfolio image of federico" />
        </div>
      </section>
    </main>
  );
}

export default AboutMe;
