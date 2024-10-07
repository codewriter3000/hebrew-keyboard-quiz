import { useState, useEffect } from "react";

const Question = ({ questionNumber, isCorrectAnswer }) => {
  /* קראטוןםפ */
  /* שדגכעיחלךף */
  /* זסבהנמצתץ */

  const letterMap = {
    0: "ק",
    1: "ר",
    2: "א",
    3: "ט",
    4: "ו",
    5: "ן",
    6: "ם",
    7: "פ",
    8: "ש",
    9: "ד",
    10: "ג",
    11: "כ",
    12: "ע",
    13: "י",
    14: "ח",
    15: "ל",
    16: "ך",
    17: "ף",
    18: "ז",
    19: "ס",
    20: "ב",
    21: "ה",
    22: "נ",
    23: "מ",
    24: "צ",
    25: "ת",
    26: "ץ",
  };

  useEffect(() => {
    console.log("Question number:", questionNumber);

    const randomLetter = Math.floor(Math.random() * 27);
    setActiveLetter(letterMap[randomLetter]);
    setInputValue("");
  }, [questionNumber]);

  const [activeLetter, setActiveLetter] = useState("");
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <div className="text-6xl">{activeLetter}</div>
      <input
        className="h-16 px-4 bg-transparent mt-8 text-2xl border border-slate-300 text-center"
        type="text"
        value={inputValue}
        onChange={(evt) => {
          setInputValue(evt.target.value);

          if (evt.target.value === activeLetter) {
            isCorrectAnswer(true);
          } else {
            isCorrectAnswer(false);
          }
        }}
      />
    </div>
  );
};

export default Question;
