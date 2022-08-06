import React from "react";
import GlobalStyles from "../../styles/GlobalStyles";
import Navigation from "../Navigation";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Navigation />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
