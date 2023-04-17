import React from "react";
import "./skills.css";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGithub, FaGitSquare, FaVuejs} from "react-icons/fa";
import webdev from "../../assets/images/webdev.png";
import vcontrol from "../../assets/images/vcontrol.png";
import blog from "../../assets/images/blog.png";

export default function Skills() {
  return (
    <main className="skillContainer" id="skill">
      <section className="head">
        <p>
          <span></span>skills
        </p>
        <h2>Specialized in</h2>
      </section>
      <section className="bottom">
        <aside>
          <div className="bottom_img">
            <img src={webdev} alt="" />
          </div>
          <h1>web development</h1>
          <div className="bottom_desc">
            <p>Through a combination of technical skills and a deep understanding of user needs, I can create website designs that bring my clients' vision to reality with an intuitive and user-friendly experience</p>
          </div>
          <div className="bottom_icon">
            <span><FaHtml5 size={20} color="orange"/></span>
            <span><FaCss3Alt size={20} color="blue"/></span>
            <span><FaJsSquare size={20} color="yellow"/></span>
            <span><FaReact size={20} color="cyan"/></span>
            <span><FaVuejs size={20} color="green"/></span>
          </div>
        </aside>
        <aside>
          <div className="bottom_img">
            <img src={vcontrol} alt="" />
          </div>
          <h1>Version control</h1>
          <div className="bottom_desc">
            <p>As a skilled practisioner in version control using Git and GitHub, I can effectively manage and track changes in code while collaborating with others to ensure project success</p>
          </div>
          <div className="bottom_icon">
          <span><FaGithub size={20}/></span>
          <span><FaGitSquare size={20} color="red"/></span>
          </div>
        </aside>
        <aside>
          <div className="bottom_img">
            <img src={blog} alt="" />
          </div>
          <h1>Technical Writing</h1>
          <div className="bottom_desc">
            <p>As a technical writer, my expertise lies in simplifying complex concepts into clear and concise language that resonates with a diverse range of audiences</p>
          </div>
          <div className="bottom_icon"></div>
        </aside>
      </section>
    </main>
  );
}
