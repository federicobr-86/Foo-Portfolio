import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const query = graphql`
  {
    contentfulUrls {
      linkedIn
      gitHub
    }
  }
`;

function SocialLinks() {
  const data = useStaticQuery(query);
  const {
    contentfulUrls: { linkedIn, gitHub },
  } = data;

  const social = [
    {
      id: 1,
      icon: <FaLinkedin className="social-icon" tabIndex="0"></FaLinkedin>,
      url: `${linkedIn}`,
    },
    {
      id: 2,
      icon: <FaGithub className="social-icon" tabIndex="0"></FaGithub>,
      url: `${gitHub}`,
    },
  ];

  return (
    <>
      {social.map((link) => {
        return (
          <a
            href={link.url}
            key={link.id}
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
          </a>
        );
      })}
    </>
  );
}

export default SocialLinks;
