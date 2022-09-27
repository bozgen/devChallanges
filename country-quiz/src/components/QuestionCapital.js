import "./styles/QuestionCapital.css";
import { useState, memo, useEffect } from "react";
import { nanoid } from "nanoid";
import adventure from "../images/adventure.svg";

const QuestionCapital = memo(({capital, answer, c1, c2, c3, setScore, results, setResults, nextQuestion, currentQuestion}) => {

    const [choices,setChoices] = useState([answer, c1, c2, c3].sort((a,b) => 0.5 - Math.random()));
    const [wrong, setWrong] = useState({is: false, id: ""});

    const handleClick = (e) => {
        if(wrong.is) return;
        
        if (e.target.id === answer.split(" ")[0]){
            e.target.classList.add("correct");
            setScore(prevScore => prevScore + 1);
            setWrong({is: true})
        }else {
            setWrong({is: true, id: e.target.id.split(" ")[0]});
        }
    }
    
    // styles after answering
    useEffect(()=>{
        if (wrong.id === "") return;
        wrong.id && document.querySelector(`#${wrong.id.split(" ")[0]}`).classList.add("wrong");
        document.querySelector(`#${answer.split(" ")[0]}`).classList.add("correct");
    },[wrong])

    useEffect(() => {
        if(!results) return;
        nextQuestion();
        setWrong({is: false, id:""});
    },[results])

    useEffect(()=>{
        setChoices([answer, c1, c2, c3].sort((a,b) => 0.5 - Math.random()));
    },[currentQuestion])

    const gotoNextQuestion = () => {
        setWrong({is: false, id:""});
        nextQuestion();
    }

    const handleNext = () => {
        if (wrong.is && !wrong.id){
            gotoNextQuestion();
        }else{
            setResults(true);
        }
    }

    const choiceButtons = choices.map((choice, i) => {
        return (
        <button 
        key={nanoid()}
        className="question-btn"
        id={choice.split(" ")[0]}
        onClick={handleClick}>
            {String.fromCharCode(65 + i)}&emsp;&emsp;&emsp;{choice}
        </button>)
    })

    return(
        <div className="question">
            <img className="question-image" src={adventure} alt="" />
            <div className="question-content">
                <h2 className="question-q">{capital} is the capital of</h2>
                {choiceButtons}
            </div>
            {wrong.is && <button onClick={handleNext}
            className="next-btn">Next</button>}
        </div>
    )
})
export default QuestionCapital;