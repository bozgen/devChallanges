import "./styles/Project.css";
import logo from "../logo.svg";

export default function Project({imageUrl, tags, title, explanation, demoUrl, codeUrl}){

    const tagElements = tags.map(tag => <span className="project-tag">#{tag}</span>)

    return(
        <div className="project-card">
            <img className="project-img" src={imageUrl || logo}/>
            <div className="project-tags">
                {tagElements}
            </div>
            <h1 className="project-title">{title}</h1>
            <p className="project-explanation">{explanation}</p>
            <div className="project-buttons">
                <button className="project-btn">Demo</button>
                <button className="project-btn clear-btn">Code</button>
            </div>
        </div>
    )
}