import React from "react";
//components
import Project from "./Project";
import projectsData from "../data/projectsData";
//style
import "./styles/Projects.css";
//third-party
import { nanoid } from "nanoid";

export default function Projects({filters, filteredProjects, setFilteredProjects, displayIndex, setDisplayIndex}){
    
    const displayCount = 3;

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
    
    React.useEffect(()=>{
        filterProjects();
        setDisplayIndex(0);
    },[filters]);

    return(
        <div className="projects">
            {projectElements.slice(displayIndex,displayIndex+displayCount)}
        </div>
    ) 
}