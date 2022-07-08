import React from "react";

const EndQuiz = ({score, quizLength}) => {
const refreshPage = () => window.location.reload();

  return (
    <div>
      {console.log(score)}
    <h1>End of quiz!</h1>
    <h2>You scored {score} out of {quizLength}</h2>
    <button onClick={refreshPage}>Play again</button>
    </div>
  )
}

export default EndQuiz;