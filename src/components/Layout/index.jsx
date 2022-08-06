import React, { useState } from "react";
import Navbar from "../Navbar/index";
import Sidebar from "../Sidebar/index";
import Footer from "../Footer/index";

import "../../assets/css/layout.css";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
