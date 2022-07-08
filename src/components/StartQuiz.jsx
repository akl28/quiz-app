import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
const Start = ({ props }) => {
  // func that flips setStart to true
  const startTheQuiz = () => props(true);

  return (
    <>
      <h1>Start the quiz.</h1>
      <h4>Whenever, you want.</h4>
      <button className="start-quiz-btn" onClick={startTheQuiz}>
        <div>Start</div>
        <span>
          <MdArrowForwardIos />
        </span>
      </button>
    </>
  );
};

export default Start;
