import { useState } from "react";
import { Instructions, Question } from "./components";
import "./_app.css";

function App() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);

  return (
    <div className="h-screen w-screen bg-slate-800 text-slate-300">
      <div className="text-center w-screen">
        {questionNumber > 0 && (
          <>
            <h1 className="text-6xl">#{questionNumber}</h1>
            <div className="text-2xl">
              Correct: {correctAnswers} | Wrong: {wrongAnswers}
            </div>
          </>
        )}
      </div>
      <div className="content-center text-center h-screen">
        {questionNumber === 0 ? (
          <Instructions
            onReady={() => {
              setQuestionNumber(1);
            }}
          />
        ) : (
          <Question
            questionNumber={questionNumber}
            isCorrectAnswer={(answer) => {
              if (answer) {
                setCorrectAnswers(correctAnswers + 1);
              } else {
                setWrongAnswers(wrongAnswers + 1);
              }
              setQuestionNumber(questionNumber + 1);
            }}
          />
        )}
      </div>
    </div>
  );
}

export default App;
