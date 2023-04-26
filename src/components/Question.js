import React, { useState, useEffect } from "react";
///added a useEffect to the hook
function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  // add useEffect code
useEffect(() =>{
  const period = setTimeout(() => {
    //decreasee amt of time
    setTimeRemaining((prevPeriod) => prevPeriod -1)

  }, 1000);
  //cleanup function
  return () => clearTimeout(period);
  

}, [timeRemaining]);
//a useEffect to render when time hits 0
useEffect(() => {
  //if the timeremaining is 0
  if(timeRemaining === 0){
    //refresh time remaining
    setTimeRemaining(10);
    //call the onAnswered with a value false
    onAnswered(false);

  }
})

  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
