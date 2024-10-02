import React, { useState } from 'react'

const Quiz = () => {
    const mockData =[
        {
            question: "What is the capital of India?",
            answer: "Delhi",
            options: ["India","Delhi","America","Russia"]
        },
        {
            question: "What is the capital of Jabalpur?",
            answer: "Bhopal",
            options: ["India","Delhi","Bhopal","Russia"]
        },
        {
            question: "What is 2 + 2?",
            answer: 4,
            options: [1,2,3,4]
        }
    ]
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [userAnswer, setUserAnswer] = useState([]);
    const [score, setScore] = useState(0);
    const [pass, setPass] = useState(false);

    const scoreCalculation=()=>{
            var percentage = (score / mockData.length) * 100;
            if(percentage > 50)
                {
                    setPass(true)
                } 
                else
                {
                    setPass(false)
                }
    }
    const handleAnswer =(optionValue: any)=>{
        console.log(optionValue)
        setUserAnswer(optionValue);
        var count =0;
        var nextQuestion=0;
        if(optionValue === mockData[currentQuestion].answer)
        {
            count = currentQuestion + 1;
            nextQuestion=currentQuestion + 1;
            setScore(count)
        }
        else{
            count = currentQuestion - 1;
            nextQuestion=currentQuestion + 1;
            setScore(count)
        }

         
        if(nextQuestion < mockData.length)
        {
            setCurrentQuestion(nextQuestion);
        }
        else{
            setShowResult(true);
            scoreCalculation();
        }
    }
    console.log("Score ", score)
  return (
    <div>
      {showResult === true ?(
        <div>
            <h1>Show Result</h1>
            {pass === true ?(
                <h1>Passed {score}</h1>
            ):(
                <h1>Failed {score}</h1>
            )}
        </div>
      ):(
        <div>
            <h1>{mockData[currentQuestion].question}</h1>
            {mockData[currentQuestion].options.map((option)=>{
                return(
                    <button onClick={()=>{handleAnswer(option)}}>{option}</button>
                )
            })}
        </div>
      )}
    </div>
  )
}

export default Quiz
