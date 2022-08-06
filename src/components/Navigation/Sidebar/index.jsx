import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { FaTimes } from "react-icons/fa";
import pageLinks from "../../../data/links";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={isOpen ? "sidebar show-sidebar" : "sidebar"}>
      <button className="close-btn" type="button" onClick={toggleSidebar}>
        <FaTimes />
      </button>
      <div className="side-container">
        <ul className={isOpen ? "sidebar-links" : null}>
          {pageLinks.map((link) => {
            return (
              <li key={link.id}>
                <AnchorLink to={link.url} onClick={toggleSidebar}>
                  {link.text}
                </AnchorLink>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
