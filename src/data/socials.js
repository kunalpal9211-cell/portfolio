import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

import portfolio from "./portfolio";

const socials = [
  {
    name: "GitHub",
    icon: FaGithub,
    link: portfolio.github,
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    link: portfolio.linkedin,
  },
  {
    name: "LeetCode",
    icon: SiLeetcode,
    link: portfolio.leetcode,
  },
  {
    name: "Email",
    icon: FaEnvelope,
    link: `mailto:${portfolio.email}`,
  },
];

export default socials;