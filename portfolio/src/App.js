import './App.css';
import React from "react";
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import BlogPost from './components/BlogPost';
import Hobbies from './components/Hobbies';
import Experience from './components/Experiences';
import ProjectsController from './components/ProjectsController';
import Projects from './components/Projects';
import Header from './components/Header';
import projectsData from './data/projectsData';
import { frontendData } from "./data/skillsData";

function App() {

  const [frontendSkill, setFrontendSkill] = React.useState([]);

  const [projects, setProjects] = React.useState([]);
  const [filters, setFilters] = React.useState([]);
  const [filteredProjects, setFilteredProjects] = React.useState(projectsData);

  const [displayIndex, setDisplayIndex] = React.useState(0);

    
  React.useEffect(()=>{
    setFrontendSkill(frontendData);
    setProjects(projectsData);
  },[])



  return (
    <div className="App">
      <Header />
      <Introduction />
      <Skills
        title="FRONT END"
        skills= {frontendSkill}
        length= {110}
        gridStart={3}
        gridEnd={"span 3"}
        />
      <BlogPost />
      <Hobbies />
      <Experience />
      <ProjectsController 
          projects={projects}
          filters={filters}
          setFilters={setFilters}
          filteredProjects={filteredProjects}
          displayIndex={displayIndex}
          setDisplayIndex={setDisplayIndex}
          />
      <Projects filters={filters}
      filteredProjects={filteredProjects}
      setFilteredProjects={setFilteredProjects}
      displayIndex={displayIndex}
      setDisplayIndex={setDisplayIndex}/>

      <h4 className="signature">created by <a className="signature-link" href="https://github.com/bozgen">bozgen</a> - devChallenges.io</h4>
      
    </div>
  );
}

export default App;