import Project from "./Project";
import projectsData from "../data/projectsData";
import "./styles/Projects.css";

export default function Projects(){
    
    const projectElements = projectsData.map(project => {
        return(
            <Project 
            imageUrl={project.imageUrl}
            tags = {project.tags}
            title = {project.title}
            explanation = {project.explanation}
            demoUrl = {project.demoUrl}
            codeUrl = {project.codeUrl}
            />
        )
    })
    

    return(
        <div className="projects">
            {projectElements}
        </div>
    ) 
}