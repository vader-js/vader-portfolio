import React from "react";
import "./intro.css";
import lines from "../../assets/images/lines.png";
import moi from "../../assets/images/my-image.png";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export default function Intro() {
  return (
    <main className="home_container" id="home">
      <article className="about_me">
        <div className="top">
          <span className="arrow"></span>
          <p>my name is</p>
        </div>
        <p className="name">
          Ayomide <span>Shittu.</span>
        </p>
        <p className="desc">
          Hello and welcome to my portfolio website! I am a front-end developer
          with over a year of experience, specializing in HTML, CSS, JavaScript,
          React, and Vue. My passion for web development stems from my love for
          creating beautiful, functional, and intuitive user interfaces. I
          believe that a great user experience is essential to the success of
          any web application, and I strive to create just that. With a strong
          attention to detail and a constant desire to learn and grow, I am
          committed to delivering high-quality work that exceeds expectations.
          Thank you for taking the time to get to know me, and I look forward to
          the opportunity to work with you!
        </p>
        <span className="socials">
          <span>
            <a href="https://www.instagram.com/_vader07/">
              <AiFillInstagram size={23} color="white" />
            </a>
          </span>
          <span>
            <a href="https://twitter.com/_vader07">
              <FaTwitter size={23} color="white" />
            </a>
          </span>
          <span>
            <a
              href="www.linkedin.com/in/
ayomide-shittu-a499081a9
"
            >
              <FaLinkedinIn size={23} color="white" />
            </a>
          </span>
          <span>
            <a href="https://github.com/vader-js">
              <FaGithub size={23} color="white" />
            </a>
          </span>
        </span>
      </article>
      <article className="about_me_img">
        <div className="img_svg">
          <section className="my_img">
            <img className="my-img" src={moi} alt="vader" />
            <img className="lines" src={lines} alt="lines" />
          </section>
        </div>
      </article>
      <article className="mobile_img">
        <img src={moi} alt="vader" />
      </article>
    </main>
  );
}
