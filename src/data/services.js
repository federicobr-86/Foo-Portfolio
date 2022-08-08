import React from "react";
import { FaCode, FaUserTie } from "react-icons/fa";

//to be added to CMS in near future
const services = [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "Frontend Web Developer",
    text: "Learn more about my Frontend Experience!",
    url: "#about",
  },
  {
    id: 2,
    icon: <FaUserTie className="service-icon" />,
    title: "Project Management",
    text: "Solid Experience in Large Scale Engineering Projects!",
    url: "#about",
  },
];

export default services;
