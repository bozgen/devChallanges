import "./styles/SkillSingle.css";

export default function SkillSingle({skill, length = 50, progress}){

    const progressStyle = {
        width: `${progress}%`
    }
    const skillStyle = {
        width: `${length}%`
    }


    return(
        <div className="skill" style={skillStyle}>
            <h2 className="skill-name">{skill}</h2>
            <div className="bar"> 
                <div style={progressStyle} className="progress-bar">·</div>
            </div>
        </div>
    )
}