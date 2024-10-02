import React, { useState } from 'react'
import "../component/Quiz.css"
const Quiz = () => {
    //Created dummy data
    const dummyData = [
        {
            question: "What is the capital of India?",
            answer: "Delhi",
            options: ["India", "Delhi", "America", "Russia"]
        },
        {
            question: "What is the capital of Jabalpur?",
            answer: "Bhopal",
            options: ["India", "Delhi", "Bhopal", "Russia"]
        },
        {
            question: "What is the sum of 2 + 2?",
            answer: 4,
            options: [1, 2, 3, 4]
        },
        {
            question: "National animal of India",
            answer: "Tiger",
            options: ["Elephant", "Lion", "Tiger", "Dog"]
        },
    ]

    const [showResult, setShowResult] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswer, setUserAnswer] = useState([]);
    const [start, setStart] = useState(false);
    const [pass, setPass] = useState(false);

    //handle quiz start
    const handleQuizStart = () => {
        setStart(true);
    }
    // handle answer function
    const handleAnswer = (optionValue) => {
        setUserAnswer([...userAnswer, optionValue])
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < dummyData.length) {
            setCurrentQuestion(nextQuestion);
        }
        else {
            handleResult();
            setShowResult(true)
        }
    }
    //handle result function
    const handleResult = () => {
        console.log("User answer ", userAnswer)
        let score = 0;
        userAnswer.forEach((answer, index) => {
            if (answer === dummyData[index].answer) {
                score++;
            }
        })
        return score;
    }

    //Timer change the question after 5 seconds
    // setTimeout(()=>{
    //     handleAnswer();
    // },5000)

    return (
        <div className='container'>
            <div className='title-container'>
                <h1>Quiz</h1>
                <button onClick={handleQuizStart}>Start</button>
            </div>
            {start === true ? (
                <div>
                    {showResult === true ? (
                        <div className='result-container'>
                            <h1 className='result-title'>Show Result</h1>
                                <div>
                                    <p>{handleResult()}/{dummyData.length}</p>
                                </div>
                            

                        </div>
                    ) : (
                        <div className='quiz-container'>
                            <div className='question-container'>
                                <p className='question-title'>Question</p>
                                <p className='question'>{dummyData[currentQuestion].question}</p>
                            </div>
                            {
                                dummyData[currentQuestion].options.map((option, index) => {
                                    return (
                                        <div className='option-container' key={index}>
                                            <button className='option' onClick={() => { handleAnswer(option) }}>{option}</button>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    )}
                </div>
            ) : (
                <div></div>
            )}
        </div>
    )
}

export default Quiz
