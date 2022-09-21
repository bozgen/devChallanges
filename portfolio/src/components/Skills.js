import "./styles/Skills.css";
import SkillSingle from "./SkillSingle";
import {nanoid} from "nanoid";

export default function Skills({title, length, skills}){

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
        <section className="skills">
            <div className="skills-card">
                <h1 className="skills-title">{title}</h1>
                {skillElements}
            </div>
        </section>
    )
}