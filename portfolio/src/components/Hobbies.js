import "./styles/Hobbies.css";
import { memo } from "react";
import Hobby from "./Hobby";

const Hobbies = memo(() => {

    return(
        <section id="hobbies" className="hobbies">
            <h1 className="hobbies-title">Hobbies</h1>
            <Hobby 
                title={"Game Development"}
                description={"Quisque feugiat malesuada molestie."}/>

            <Hobby 
                title={"Music"}
                description={"Quisque feugiat malesuada molestie."}/>
        </section>
    )
})
export default Hobbies;