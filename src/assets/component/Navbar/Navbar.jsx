import React from "react";
import logo from "../../../assets/images/logo.svg";
import "./Navbar.css";
import {motion } from "framer-motion"

export default function Navbar() {
  return (
    <main className="navbar">
      <motion.ul 
      className="navlist"
      initial={{y: "-20vh"}}
      animate={{y: 0,type: "spring", stiffness: 10,
      transition:{duration: 1.5}}}>
        <li 
        className="navlist__item">
          <motion.img 
          initial={{rotateZ: 360}}
          animate={{rotateZ: 0,
          transition:{duration: 2}}}
          src={logo} alt="logo" />
          <motion.span
          initial={{rotateX: 180, x: 100}}
          animate={{rotateX: 0, x: 0,
          transition:{duration: 2}}}>AS<sub>Portfolio</sub></motion.span>
        </li>
        <li className="navlist_item spc"></li>
        <li 
        className="navlist_item dir">
          <a href="#home">Home</a>
        </li>
        <li className="navlist_item dir">
          <a href="#home">Skills</a>
        </li>
        <li className="navlist_item dir">
          <a href="#">Projects</a>
        </li>
        <li className="navlist_item dir">
          <a href="#">Resume</a>
        </li>
      </motion.ul>
    </main>
  );
}
