import React from "react";
import "../../public/style.css";

const Quiz = () => {
  return (
    <>
      <div className="quizContainer">
        <div className="scoreCont"></div>
        <div className="questions">
          <div className="ques">
            <p>
              1. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga,
              maiores.
            </p>
            <div className="option">
              <div className="option1">
                <p>
                  {" "}
                  <input type="checkbox" name="opt1" /> <label>Option 1</label>{" "}
                </p>
                <p>
                  {" "}
                  <input type="checkbox" name="opt1" /> <label>Option 2</label>{" "}
                </p>
              </div>
              <div className="option2">
                <p>
                  {" "}
                  <input type="checkbox" name="opt1" /> <label>Option 3</label>{" "}
                </p>
                <p>
                  {" "}
                  <input type="checkbox" name="opt1" /> <label>Option 4</label>{" "}
                </p>
              </div>
              <button className="nextBtn">next</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
