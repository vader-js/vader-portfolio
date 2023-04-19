import React, { useEffect, useState } from "react";
import "./projects.css";
import useFetch from "../../hooks/useFetch";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import {SlSocialGithub} from "react-icons/sl"
import { Data } from "../../assets/Data/data";
import { IoLink } from "react-icons/io5";
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";

const loaderVariants = {
  visible:{
    y: [0, -35],
    transition:{
      delay: 1,
      duration: 0.8,
      repeat: Infinity,
      ease: "easeOut",
    }

  }
}
export default function Projects() {
  const [pageNo, setPageNo] = useState(1);
  const [pages, setPages] = useState(0);
  const [repo, setRepo] = useState([]);
  const { data, loading, error } = useFetch(
    `https://api.github.com/users/vader-js/repos`
  );
  useEffect(() => {
    const total_repo = data?.length;
    const repo_per_page = 3;
    const result = data.filter((main) => main.stargazers_count > 0);
    const total_page = Math.ceil(result.length / repo_per_page);
    const start = (pageNo - 1) * repo_per_page;
    const end = start + repo_per_page;
    const newRepo = result.slice(start, end);
    setPages(total_page);
    setRepo(newRepo);
  }, [data, pageNo]);
// console.log(data)
  return (
    <div className="projectsContainer" id="project">
      <section className="projects_top">
        <aside>
          <p>
            <span></span>My works
          </p>
          <div>
            <h1>featured Portfolios</h1>
            <span>
              <button
                onClick={() => setPageNo((page) => page - 1)}
                disabled={pageNo <= 1}
              >
                <MdOutlineNavigateBefore size={30} />
              </button>
              <button
                onClick={() => setPageNo((page) => page + 1)}
                disabled={pageNo == pages}
              >
                <MdOutlineNavigateNext size={30} />
              </button>
            </span>
          </div>
        </aside>
      </section>
      <InView threshold={0}>
        {({ inView, ref}) => (
          <motion.section
          initial={{ opacity: 0, y:"20vh" }}
          animate={inView ? { opacity:1, y: 0 }: { opacity: 0, y: "20vh" }}
          transition={{ duration: 1, when: "beforeChildren"}}
          ref={ref} className="projects_main">
          {loading ? (
            <motion.span
            variants={loaderVariants}
            animate="visible"
             className="ball"></motion.span>
          ) : (
            repo.map((repo) => {
              return (
                <aside key={repo.id}>
                  <div className="image_container" key={repo.id}>
                    {Data.filter((name) => name.name === repo.name).map(
                      (image) => (
                        <img key={image.id} src={image.image} alt="" />
                      )
                    )}
                  </div>
                  <div className="project_info">
                    <h1>{repo.name}</h1>
                    <div>
                      <p>
                        {repo.topics.map((topic) => (
                          <span key={topic}>{topic}</span>
                        ))}
                      </p>
                      <div className="iconLink">
                      <a href={repo.homepage} target="_blank">
                      <IoLink size={30}/>
                      </a> 
                      <a href={repo.svn_url} target="_blank">
                      <SlSocialGithub size={30}/> 
                      </a> 
                      </div>
                        
                    </div>
                  </div>
                </aside>
              );
            })
          )}
        </motion.section>
        )}
      </InView>
      
    </div>
  );
}
