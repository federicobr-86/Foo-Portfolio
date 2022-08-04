import React from "react";
import text from "./text";
import { FaCode, FaUserTie } from "react-icons/fa";

const {
  services_web_title,
  services_web_text,
  services_project_title,
  services_project_text,
  services_url,
} = text;

const services = [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: `${services_web_title}`,
    text: `${services_web_text}`,
    url: `${services_url}`,
  },
  {
    id: 2,
    icon: <FaUserTie className="service-icon" />,
    title: `${services_project_title}`,
    text: `${services_project_text}`,
    url: `${services_url}`,
  },
];

export default services;
