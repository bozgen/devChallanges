import "./styles/QuestionCapital.css";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import adventure from "../images/adventure.svg";

const QuestionCapital = ({capital, answer, c1, c2, c3, setScore}) => {

    const shuffledChoices = [answer, c1, c2, c3].sort((a,b) => 0.5 - Math.random());
    const [answered, setAnswered] = useState(false);

    const handleClick = (e) => {
        setAnswered(true);

        if (e.target.name === answer){
            e.target.classList.add("correct");
            setScore(prevScore => prevScore + 1);
        }else {
            e.target.classList.add("wrong");
        }
    }

    const handleNext = () => {
        // implement this
    }

    const choiceButtons = shuffledChoices.map((choice) => {
        return (
        <button 
        key={nanoid()}
        className="question-btn"
        name={choice}
        onClick={handleClick}>
            {choice}
        </button>)
    })

    return(
        <div className="question">
            <img className="question-image" src={adventure} alt="" />
            <div className="question-content">
                <h2 className="question-q">{capital} is the capital of</h2>
                {choiceButtons}
            </div>
            <button onClick={handleNext}
            className="next-btn">Next</button>
        </div>
    )
}
export default QuestionCapital;