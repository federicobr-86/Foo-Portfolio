import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const query = graphql`
  {
    contentfulLinks {
      links
    }
    contentfulSocialGit {
      socialGit
    }
  }
`;

function SocialLinks() {
  const data = useStaticQuery(query);
  const {
    contentfulLinks: { links },
    contentfulSocialGit: { socialGit },
  } = data;

  const social = [
    {
      id: 1,
      icon: <FaLinkedin className="social-icon"></FaLinkedin>,
      url: `${links}`,
    },
    {
      id: 2,
      icon: <FaGithub className="social-icon"></FaGithub>,
      url: `${socialGit}`,
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
