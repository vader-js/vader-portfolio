import background from "./assets/images/starnight.jpg"
import Navbar from "./assets/component/Navbar/Navbar"
import Intro from "./Views/Intro/intro"
import Projects from "./Views/Projects/project"
import Skills from "./Views/Skills/skills"
import './App.css'

function App() {
  
  return (
    <div className="App">
      <div className="img_container">
      <img src={background} alt="" />
      </div>
     <div className="body">
      <Navbar/>
      <Intro />
      <Skills />
      <Projects />
     </div>
    </div>
  )
}

export default App
