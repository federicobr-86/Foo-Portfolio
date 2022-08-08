import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { StyledAboutSection, StyledAbout } from "./AboutMeStyles";
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
      <StyledAboutSection id="about">
        <StyledAbout>
          <Title title={aboutTitle} />
          {aboutText.map((item) => {
            return <p key={item.id}>{item.aboutText}</p>;
          })}
          <GatsbyImage image={aboutImage} alt="portfolio image of federico" />
        </StyledAbout>
      </StyledAboutSection>
    </main>
  );
}

export default AboutMe;
