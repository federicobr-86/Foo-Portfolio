import React, { useState } from "react";
import GlobalStyles from "../../styles/GlobalStyles";
import Navbar from "../Navbar/index";
import Sidebar from "../Sidebar/index";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <GlobalStyles />
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      {children}
    </React.Fragment>
  );
};

export default Layout;
