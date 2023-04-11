import React from "react";
import logo from "../../../assets/images/logo.svg";
import "./Navbar.css";

export default function Navbar() {
  return (
    <main>
      <ul className="navlist">
        <li className="navlist__item">
          <img src={logo} alt="logo" />
          <span>AS<sub>Portfolio</sub></span>
        </li>
        <li className="navlist_item spc"></li>
        <li className="navlist_item dir">
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
      </ul>
    </main>
  );
}
