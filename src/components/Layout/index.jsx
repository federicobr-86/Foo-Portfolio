import React from "react";
import GlobalStyles from "../../styles/GlobalStyles";
import Navigation from "../Navigation";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Navigation />
      {children}
    </React.Fragment>
  );
};

export default Layout;
