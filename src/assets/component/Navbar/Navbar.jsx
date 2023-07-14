import React from "react";
import logo from "../../../assets/images/Logo.svg";
import "./Navbar.css";
import { motion } from "framer-motion";


export default function Navbar({inview}) {
  const navVariants = {
    hidden: { y: "-20vh" },
    visible: { y: 0, transition: { delay: 0.3, duration: 2 } },
  };
  const logoVariants = {
    hidden: { rotateZ: 360 },
    visible: { rotateZ: 0, transition: { duration: 6 } },
  };
   
  return (
    <main className="navbar" style={{backgroundColor: !inview? "#404c51" : "transparent",
    color: !inview? "#000" : '#fff'}}>
      <motion.ul
        className="navlist"
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <li className="navlist__item">
          <motion.img variants={logoVariants} src={logo} alt="logo" />
          <span>
            AS<sub>Portfolio</sub>
          </span>
        </li>
        <li className="navlist_item spc"></li>
        <li className="navlist_item dir">
          <a href="#home">Home</a>
        </li>
        <li className="navlist_item dir">
          <a href="#skill">Skills</a>
        </li>
        <li className="navlist_item dir">
          <a href="#project">Projects</a>
        </li>
        <li className="navlist_item dir">
          <a
            href='https://resume.io/r/qwOy1aUvk'
            target="_blank"
          >
            Resume
          </a>
        </li>
      </motion.ul>
    </main>
  );
}
