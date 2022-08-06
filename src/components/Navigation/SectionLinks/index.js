import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import pageLinks from "../../../data/links";

function SectionLinks() {
  return (
    <>
      {pageLinks.map((link) => {
        return (
          <AnchorLink
            key={link.id}
            to={link.url}
            title={link.text}
          ></AnchorLink>
        );
      })}
    </>
  );
}

export default SectionLinks;
