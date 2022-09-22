import React from "react";
import "./styles/ProjectsController.css";
//icons
import arrowLeft from "../icons/arrow-left.svg";
import arrowRight from "../icons/arrow-right.svg";

export default function ProjectsController({projects, setFilters, filteredProjects}){


    const handleFilterClick = (e) => {
        if(e.target.classList.contains("selected")){
            e.target.classList.remove("selected");
            setFilters(prevFilters => {
                return prevFilters.filter(f => {
                    return f !== e.target.textContent;
                });
            })
        }else{
            e.target.classList.add("selected");
            setFilters(prevFilters => [...prevFilters,e.target.textContent]);
        }
    }

    return(
        <section id="projects" className="projects-controller">
            <div className="projects-top">
                <h1 className="projects-title">Projects<span className="project-count"> ({filteredProjects.length})</span></h1>
                <h1 className="displayed-projects">1 - 3</h1>
            </div>
            <div className="projects-controller-buttons">
                <div className="control-butttons">
                    <button onClick={(e)=>handleFilterClick(e)} className="control-button">no framework</button>
                    <button onClick={(e)=>handleFilterClick(e)} className="control-button">react</button>
                    <button onClick={(e)=>handleFilterClick(e)} className="control-button">responsive</button>
                </div>
                <div className="control-butttons-right">
                    <button className="control-button arrow disabled"><img className="arrow-img" src={arrowLeft} alt=""/></button>
                    <button className="control-button arrow"><img className="arrow-img" src={arrowRight} alt=""/></button>
                </div>
            </div>
        </section>
    )
}