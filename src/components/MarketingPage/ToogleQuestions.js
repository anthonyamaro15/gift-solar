import "../../sass/_toggleQuestions.scss";
import React, { useState } from "react";
import SlideToggle from "react-slide-toggle";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const ToggleQuestions = ({ data }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const { answers, question } = data;

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };
  return (
    <section className="toggleAnswer" onClick={toggleAnswer}>
      <SlideToggle
        collapsed
        duration={300}
        render={({ onToggle, setCollapsibleElement, progress }) => (
          <div id="my-collapsible" onClick={onToggle}>
            <div className="btn-arrows">
              <p className="question">{question}</p>
              <span>{showAnswer ? <IoIosArrowDown /> : <IoIosArrowUp />}</span>
            </div>

            <div
              className="my-collapsible__content"
              ref={setCollapsibleElement}
            >
              <div
                className="my-collapsible__content-inner"
                style={{
                  transform: `translateY(${Math.round(
                    20 * (-1 + progress)
                  )}px)`,
                }}
              >
                <ul className="answer">
                  {answers.map((answer, i) => (
                    <li key={i}>{answer.answer}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      />
    </section>
  );
};

export default ToggleQuestions;
