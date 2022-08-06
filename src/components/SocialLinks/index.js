import React from "react";
import socialLinks from "../../data/social_links";

function SocialLinks() {
  return (
    <>
      {socialLinks.map((link) => {
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
