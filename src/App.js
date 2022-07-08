import React, { useState } from 'react'
import './App.css'
import StartQuiz from './components/StartQuiz'
import Quiz from './components/Quiz'

function App() {

  const [start, setStart] = useState(false);

  return (
    <div className="quiz">
      { start ? <Quiz /> : <StartQuiz props={setStart} />} 
    </div>
  );
}

export default App;