import './App.css';
import React from "react";
import Introduction from './components/Introduction';
import Skills from './components/Skills';

function App() {
  
  const mockSkills = [
    {name: "HTML", progress: 90},
    {name: "CSS", progress: 70},
    {name: "Javascript", progress: 85},
    {name: "React", progress: 50}
  ]

  const [skills, setSkills] = React.useState([]);
  
  React.useEffect(()=>{
    setSkills(mockSkills);
  },[])

  return (
    <div className="App">
      <Introduction />
      <Skills
        title="Front-end"
        skills ={skills}
        length= {25}
        />
    </div>
  );
}

export default App;
