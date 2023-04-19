import React, {useEffect} from 'react';
import background from "./assets/images/starnight.jpg"
import Navbar from "./assets/component/Navbar/Navbar"
import Intro from "./Views/Intro/intro"
import Projects from "./Views/Projects/project"
import Skills from "./Views/Skills/skills"
import BlogPost from "./Views/BlogPost/blogPost"
import Contact from "./assets/component/Contact/contact"
import Footer from "./assets/component/Footer/footer"
import {AiFillHome, AiOutlineProject} from "react-icons/ai"
import {BsPersonFillGear} from "react-icons/bs"
import {FaBloggerB} from "react-icons/fa"
import { useInView } from 'react-intersection-observer';
import './App.css'

function App() {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  return (
    <div className="App" id="App">
      <div className="img_container">
      <img src={background} alt="" />
      </div>
     <div className="body">
      <Navbar inview={inView}/>
      <div ref={ref} className="intersect"></div>
      <Intro />
      <Skills />
      <Projects />
      <BlogPost />
      <Contact />
      < Footer />
     </div>
     <div className="nav">
        <div className="icons">
          <a href="#App"><AiFillHome size={30}/></a>
          <a href="#skill"><BsPersonFillGear size={30}/></a>
          <a href="#project"><AiOutlineProject size={30}/></a>
          <a href="#blog"><FaBloggerB size={30}/></a>
        </div>
     </div>
    </div>
  )
}

export default App
