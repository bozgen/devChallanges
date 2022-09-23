// STYLE
import './App.css';

// REACT
import React from "react";
import { useState } from "react";

// COMPONENTS
import Header from './components/Header';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import BlogPost from './components/BlogPost';
import Hobbies from './components/Hobbies';
import Experiences from './components/Experiences';
import ProjectsController from './components/ProjectsController';
import Projects from './components/Projects';

// MOCK DATA
import projectsData from './data/projectsData';
import { frontendData } from "./data/skillsData";

function App() {

  const [frontendSkill,     setFrontendSkill    ] = useState([]);
  const [projects,          setProjects         ] = useState([]);
  const [filters,           setFilters          ] = useState([]);
  const [filteredProjects,  setFilteredProjects ] = useState(projectsData);
  const [displayIndex,      setDisplayIndex     ] = useState(0);
    
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
      <Experiences />
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
      setDisplayIndex={setDisplayIndex}
      />

      <h4 className="signature">created by <a className="signature-link" href="https://github.com/bozgen">bozgen</a> - devChallenges.io</h4>
      
    </div>
  );
}

export default App;
