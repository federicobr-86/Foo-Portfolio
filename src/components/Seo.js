import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

function Seo() {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Title Coming soon...</title>
        <meta
          name="Portfolio Description"
          content="Content to be added by query soon..."
        />
      </Helmet>
    </>
  );
}

Seo.propTypes = {
  lang: PropTypes.string,
  title: PropTypes.string.isRequired,
  meta: PropTypes.string.isRequired,
};

Seo.defaultProps = {
  lang: `en`,
  title: ``,
  meta: "",
};

export default Seo;
