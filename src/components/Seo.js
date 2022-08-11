import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function Seo() {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Title Coming soon...</title>
        <meta
          name="description"
          content="Content to be added by query soon..."
        />
      </Helmet>
    </>
  );
}

Seo.propTypes = {};

export default Seo;
