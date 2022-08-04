import React from "react";
import text from "./text";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const { social_linkedin, social_github } = text;

const social = [
  {
    id: 1,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: `${social_linkedin}`,
  },
  {
    id: 2,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: `${social_github}`,
  },
];

export default social;
