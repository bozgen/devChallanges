import "./styles/Project.css";
import logo from "../logo.svg";
import { nanoid } from "nanoid";

export default function Project({imageUrl, tags, title, explanation, demoUrl, codeUrl}){

    const tagElements = tags.map(tag => <span key={nanoid()} className="project-tag">#{tag}</span>)

    const handleDemoClick = () => {
        window.location.href = "https://bozgen.github.io/devChallenges/edie-homepage";
    }
    const handleCodeClick = () => {
        window.location.href = "https://github.com/bozgen/devChallenges/";
    }

    return(
        <div className="project-card">
            <img className="project-img" src={imageUrl || logo}/>
            <div className="project-tags">
                {tagElements}
            </div>
            <h1 className="project-title">{title}</h1>
            <p className="project-explanation">{explanation}</p>
            <div className="project-buttons">
                <button onClick={handleDemoClick} className="project-btn">Demo</button>
                <button onClick={handleCodeClick} className="project-btn clear-btn">Code</button>
            </div>
        </div>
    )
}