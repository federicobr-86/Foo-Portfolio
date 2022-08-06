import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";

function LinkButton({ text, link }) {
  return <AnchorLink title={text} to={link} className="btn" />;
}

export default LinkButton;
