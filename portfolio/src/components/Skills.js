import "./styles/Skills.css";
import SkillSingle from "./SkillSingle";
import {nanoid} from "nanoid";

export default function Skills({title, length, skills, gridStart, gridEnd}){

    const skillElements = skills.map(skill => {
        return (
            <SkillSingle
                key= {nanoid()}
                skill={skill.name}
                length={length}
                progress={skill.progress}
            />
        )
    })

    const skillsStyles = {
        gridColumn: `${gridStart} / ${gridEnd}`
    }


    return(
        <section className="skills" style={skillsStyles}>
            <div className="skills-card">
                <h1 className="skills-title">{title}</h1>
                {skillElements}
            </div>
        </section>
    )
}