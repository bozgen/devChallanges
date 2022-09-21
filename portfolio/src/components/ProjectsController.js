import React from "react";
import "./styles/ProjectsController.css";

export default function ProjectsController({projects}){

    const [filters, setFilters] = React.useState([]);

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
            <h1 className="projects-title">Projects<span className="project-count"> ({projects.length})</span></h1>

            <div className="control-butttons">
                <button onClick={(e)=>handleFilterClick(e)} className="control-button">no framework</button>
                <button onClick={(e)=>handleFilterClick(e)} className="control-button">react</button>
            </div>
        </section>
    )
}