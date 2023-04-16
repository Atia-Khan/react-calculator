import React, { useState } from "react";

const Calculator = ({heading}) => {
  let [answer, setAnswer] = useState("");

  function valueHandler(event) {
    setAnswer(answer + event.target.innerHTML);
  }

  function equalHandler() {
    setAnswer(eval(answer));
  }

  function allClear() {
    setAnswer("");
  }

  function delLast() {
    setAnswer(answer.substring(0, answer.length - 1));
    //setAnswer(answer.toString().slice(0, -1));
  }

  return (
    <>
    <h1>{heading}</h1>
      <div className="calculator">
        <input type="text" placeholder="0" id="inputBox" value={answer} />
        <div>
          <button className="operator" onClick={allClear}>
            AC
          </button>
          <button className="operator" onClick={delLast}>
            DEL
          </button>
          <button className="operator" onClick={valueHandler}>
            %
          </button>
          <button className="operator" onClick={valueHandler}>
            /
          </button>
        </div>
        <div>
          <button onClick={valueHandler}>7</button>
          <button onClick={valueHandler}>8</button>
          <button onClick={valueHandler}>9</button>
          <button className="operator" onClick={valueHandler}>
            *
          </button>
        </div>
        <div>
          <button onClick={valueHandler}>5</button>
          <button onClick={valueHandler}>4</button>
          <button onClick={valueHandler}>6</button>
          <button className="operator" onClick={valueHandler}>
            -
          </button>
        </div>
        <div>
          <button onClick={valueHandler}>1</button>
          <button onClick={valueHandler}>2</button>
          <button onClick={valueHandler}>3</button>
          <button className="operator" onClick={valueHandler}>
            +
          </button>
        </div>
        <div>
          <button onClick={valueHandler}>00</button>
          <button onClick={valueHandler}>0</button>
          <button className="operator" onClick={valueHandler}>
            .
          </button>
          <button onClick={equalHandler} className="eql_btn">
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default Calculator;
