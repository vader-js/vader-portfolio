import React, { useEffect, useState } from "react";
import "./projects.css";
import useFetch from "../../hooks/useFetch";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";

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
    const result = data.filter(main => main.stargazers_count > 0);
    const total_page = Math.ceil(result.length/ repo_per_page);
    const start = (pageNo - 1) * repo_per_page;
    const end = start + repo_per_page;
    const newRepo = result.slice(start, end);
    setPages(total_page);
    setRepo(newRepo);

  }, [data, pageNo]);
 
  return (
    <div className="projectsContainer">
      <section className="projects_top">
        <aside>
          <p>
            <span></span>My works
          </p>
          <div>
            <h1>featured Portfolios</h1>
            <span>
              <button onClick={() => setPageNo((page) => page - 1)}
              disabled={pageNo <= 1}>
                <MdOutlineNavigateBefore size={30} />
              </button>
              <button onClick={() => setPageNo((page) => page + 1)}
              disabled={pageNo == pages}>
                <MdOutlineNavigateNext size={30} />
              </button>
            </span>
          </div>
        </aside>
      </section>
      <section className="projects_main">
        {repo.map(repo => <h1 key={repo.name}>{repo.name}</h1>)}
      </section>
    </div>
  );
}
