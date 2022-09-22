import React from "react";
//components
import Project from "./Project";
import projectsData from "../data/projectsData";
//style
import "./styles/Projects.css";
//third-party
import { nanoid } from "nanoid";

export default function Projects({filters, filteredProjects, setFilteredProjects}){
    
    
    
    const projectElements = filteredProjects.map(project => {
        return(
            <Project 
            key={nanoid()}
            imageUrl={project.imageUrl}
            tags = {project.tags}
            title = {project.title}
            explanation = {project.explanation}
            demoUrl = {project.demoUrl}
            codeUrl = {project.codeUrl}
            />
        )
    })
    
    React.useEffect(()=>{
        filterProjects();
    },[filters]);
    
    const filterProjects = () => {
        if(!filters[0]){
            setFilteredProjects(projectsData);
            return;
        }

        const filteredProjects = projectsData.filter(project => {
            return project.tags.some(tag => {
                return filters.some(filter => tag===filter)
            })
        })
        setFilteredProjects(filteredProjects);
    }

    return(
        <div className="projects">
            {projectElements}
        </div>
    ) 
}