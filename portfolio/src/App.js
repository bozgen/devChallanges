import './App.css';
import React from "react";
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import BlogPost from './components/BlogPost';
import Hobbies from './components/Hobbies';
import Experience from './components/Experiences';
import ProjectsController from './components/ProjectsController';
import Projects from './components/Projects';

function App() {
  
  const mockFrontend = [
    {name: "HTML", progress: 90},
    {name: "CSS", progress: 70},
    {name: "Javascript", progress: 85},
    {name: "React", progress: 50},
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
  },[])



  return (
    <div className="App">
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
      
    </div>
  );
}

export default App;
