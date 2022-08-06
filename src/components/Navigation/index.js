import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </>
  );
}

export default Navigation;
