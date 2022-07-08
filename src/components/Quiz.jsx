import React, { useState, useEffect } from "react";
import axios from "axios";
import EndQuiz from "./EndQuiz";
import FadeLoader from "react-spinners/FadeLoader";
import styles from './quiz.module.css'

const Quiz = () => {
  const [quiz, getQuiz] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [endQuiz, setEndQuiz] = useState(false);

  // turn button green or red ?
  const checkAnswer = (e) => {
    setCurrentQuestion(currentQuestion + 1);

    if (e.target.outerText === quiz[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 === quiz.length) {
      setEndQuiz(true);
    }
  };

  //func to shuffle true and false options in the quiz array
  const shuffle = (arr) => {
    return arr.sort(() => Math.random() - 0.5);
  };

  // gets quiz Qs from API & puts into state
  useEffect(() => {
    axios
      .get(
        "https://the-trivia-api.com/api/questions?categories=geography&limit=5&difficulty=medium"
      )
      .then((response) => {
        console.log(response.data[0])
        const questions = response.data;
        getQuiz(
          questions.map((item) => ({
            question: item.question,
            options: shuffle([item.correctAnswer, ...item.incorrectAnswers]),
            answer: item.correctAnswer,
          }))
        );
      });
  }, []);

  // handles async from api call
  if (!quiz) {
    return <FadeLoader size={150} />;
  }

  return endQuiz ? (
    <EndQuiz score={score} quizLength={quiz.length} />
  ) : (
    <div>
      <h1 className={styles.quizTitle}>React Quiz App</h1>
      <h2 className={styles.questionCount}>
        Question {currentQuestion + 1}/{quiz.length}
      </h2>
      <>
        
        <h2>{quiz[currentQuestion].question}</h2>
        <ul className={styles.optionsContainer}>
          {quiz[currentQuestion].options.map((option, index) => (
            <button
              className={styles.optionButton}
              key={index}
              onClick={checkAnswer}
            >
              {option}
            </button>
          ))}
        </ul>
      </>
      
    </div>
  );
};

export default Quiz;
