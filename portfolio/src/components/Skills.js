import "./styles/Skills.css";
import { memo } from "react";
import SkillSingle from "./SkillSingle";
import {nanoid} from "nanoid";

const Skills = memo(({title, length, skills, gridStart, gridEnd}) => {

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


    return(
        <section id="skills" className="skills">
            <div className="skills-card">
                <h1 className="skills-title">{title}</h1>
                {skillElements}
            </div>
        </section>
    )
})
export default Skills;