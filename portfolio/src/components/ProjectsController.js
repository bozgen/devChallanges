// STYLE
import "./styles/ProjectsController.css";
// REACT
import React from "react";
import { useCallback } from "react";
// ICONS
import arrowLeft from "../icons/arrow-left.svg";
import arrowRight from "../icons/arrow-right.svg";

export default function ProjectsController({ setFilters, filteredProjects, displayIndex, setDisplayIndex}){

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

    const decrementDisplayIndex = (e) => {
        const leftBtn = document.querySelector("#projects-left-btn");
        const rightBtn = document.querySelector("#projects-right-btn");
        if(displayIndex-3 >=0 ){
            setDisplayIndex(prevIndex => prevIndex -3);
            if(rightBtn.classList.contains("disabled")){
                rightBtn.classList.remove("disabled");
            }
            if(displayIndex <= 3 && !leftBtn.classList.contains("disabled")){
                leftBtn.classList.add("disabled");
            }
        }
    }

    const incrementDisplayIndex = (e) => {
        const leftBtn = document.querySelector("#projects-left-btn");
        const rightBtn = document.querySelector("#projects-right-btn");

        if(displayIndex + 3 >= filteredProjects.length){ return; }

        if(rightBtn.classList.contains("disabled"))
            { rightBtn.classList.remove("disabled") }

        setDisplayIndex(prevIndex => prevIndex +3);
        

        if(displayIndex + 6 >= filteredProjects.length && !rightBtn.classList.contains("disabled"))
        { rightBtn.classList.add("disabled") }

        if(leftBtn.classList.contains("disabled"))
            { leftBtn.classList.remove("disabled") }
    }

    const updateButtonStyles = useCallback(() => {
        const leftBtn = document.querySelector("#projects-left-btn");
        const rightBtn = document.querySelector("#projects-right-btn");

        //update left button
        if (!leftBtn.classList.contains("disabled")){leftBtn.classList.add("disabled")}

        //update right button
        if(filteredProjects.length <=3 && !rightBtn.classList.contains("disabled"))
            { rightBtn.classList.add("disabled") }
        else if(filteredProjects.length >3 && rightBtn.classList.contains("disabled"))
            { rightBtn.classList.remove("disabled") }
    
    },[filteredProjects])

    React.useEffect(()=>{
        updateButtonStyles();
    },[filteredProjects, updateButtonStyles])

    return(
        <section id="projects" className="projects-controller">
            <div className="projects-top">
                <h1 className="projects-title">Projects<span className="project-count"> ({filteredProjects.length})</span></h1>
                <h1 className="displayed-projects">{displayIndex+1} - {displayIndex+3 >= filteredProjects.length? filteredProjects.length : displayIndex+3}</h1>
            </div>
            <div className="projects-controller-buttons">
                <div className="control-butttons">
                    <button onClick={(e)=>handleFilterClick(e)} className="control-button">no framework</button>
                    <button onClick={(e)=>handleFilterClick(e)} className="control-button">react</button>
                    <button onClick={(e)=>handleFilterClick(e)} className="control-button">responsive</button>
                </div>
                <div className="control-butttons-right">
                    
                    <button onClick={decrementDisplayIndex}
                            className="control-button arrow disabled"
                            id="projects-left-btn">
                        <img className="arrow-img" src={arrowLeft} alt=""/>
                    </button>
                    
                    <button onClick={incrementDisplayIndex}
                            className="control-button arrow"
                            id="projects-right-btn">
                        <img className="arrow-img" src={arrowRight} alt=""/>
                    </button>
                </div>
            </div>
        </section>
    )
}