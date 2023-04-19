import React from "react";
import "./intro.css";
import lines from "../../assets/images/lines.png";
import moi from "../../assets/images/my-image.png";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import {motion} from 'framer-motion'

export default function Intro() {
  const mainVariants = {
    hidden: {
      opacity: 0,
      x: "-50vw"
    },
    visible: {
      opacity: 1,
      x: 0,
      transition:{delay: 0.2, type: "spring", stiffness: 200, when: "beforeChildren"}
    }
  }
  const descVariants={
    hidden:{
      opacity: 0,
      x: "-100vh"
    },
    visible:{
      opacity: 1,
      x: 0,
      transition:{delay: 0.2, duration: 1,}
    }
  }
  const iconVariants={
    hidden:{
      opacity: 0,
    },
    visible:{
      opacity:0.8,
      transition:{ duration: 1,},
    }
  }
  const imgconVariants={
    hidden:{
      opacity: 0,
      x: "100vw"
    },
    visible:{
      opacity: 1,
      x: 0,
      transition:{delay: 0.5, type: "spring", stiffness: 200, when:"beforeChildren"}
    }
  }
  const imageVariants={
    hidden:{
      x: "100vw",
      rotateZ: 360
    },
    visible:{
      x: 0,
      rotateZ: -10,
      transition:{ duration: 2,}
    }
  }
  const mobileVariant={
    hidden:{
      opacity: 0,
      x: "-100vw"
    },
    visible:{
      opacity: 1,
      x: 0,
      transition:{delay: 0.5, type: "spring", stiffness: 200}
    }
  }
  return (
    <motion.main 
    variants={mainVariants}
    initial="hidden"
    animate="visible"
    className="home_container" id="home">
      <article className="about_me">
        <div className="top">
          <span className="arrow"></span>
          <p>my name is</p>
        </div>
        <p className="name">
          Ayomide <span>Shittu.</span>
        </p>
        <motion.p 
        variants={descVariants}
        className="desc">
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
        </motion.p>
        <motion.span 
        variants={iconVariants}
        className="socials">
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
        </motion.span>
      </article>
      <motion.article 
      variants={imgconVariants}
      initial="hidden"
      animate="visible"
      className="about_me_img">
        <div className="img_svg">
          <motion.section
          variants={imageVariants} className="my_img">
            <img className="my-img" src={moi} alt="vader" />
            <img className="lines" src={lines} alt="lines" />
          </motion.section>
        </div>
      </motion.article>
      <motion.article 
      variants={mobileVariant}
      className="mobile_img">
        <img src={moi} alt="vader" />
      </motion.article>
    </motion.main>
  );
}
