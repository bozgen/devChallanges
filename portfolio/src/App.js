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

function App() {
  
  const mockFrontend = [
    {name: "HTML", progress: 100},
    {name: "CSS", progress: 83},
    {name: "Javascript", progress: 79},
    {name: "React", progress: 87},
    {name: "React Native", progress: 19},
    {name: "Redux", progress: 15},
  ]
  const mockDesign = [
    {name: "Photoshop", progress: 13},
    {name: "Figma", progress: 87}
  ]

  
  const [frontendSkill, setFrontendSkill] = React.useState([]);
  const [designSkill, setDesignSkill] = React.useState([]);

  const [projects, setProjects] = React.useState([]);
    
  React.useEffect(()=>{
    setFrontendSkill(mockFrontend);
    setDesignSkill(mockDesign);
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
      <ProjectsController projects={projects}/>
      <Projects />

      <h4 className="signature">created by <a className="signature-link" href="https://github.com/bozgen">bozgen</a> - devChallenges.io</h4>
      
    </div>
  );
}

export default App;
