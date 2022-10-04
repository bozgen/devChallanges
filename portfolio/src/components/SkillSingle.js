import "./styles/SkillSingle.css";
import { memo } from "react";

const SkillSingle = memo(({skill, length = 50, progress}) => {

    const progressStyle = {
        width: `${progress}%`
    }


    return(
        <div className="skill">
            <h2 className="skill-name">{skill}</h2>
            <div className="bar"> 
                <div style={progressStyle} className="progress-bar">·</div>
            </div>
        </div>
    )
});
export default SkillSingle;