import React, { useState } from 'react';
import calculate from '../logic/calculate';

const CalculatorUI = () => {
  const [state, setState] = useState({ total: 0, next: null, operation: null });

  function HandleBtnClick(event) {
    setState((state) => calculate(state, event.target.name));
  }

  return (
    <div className="calculator-page">
      <div className="display"><p>Lets do some Maths!!</p></div>
      <div className="calculator">
        <div className="screen">
          {state.total}
          {state.operation}
          {state.next}
        </div>
        <div className="keys">
          <button type="button" name="AC" onClick={HandleBtnClick}>AC</button>
          <button type="button" name="+/-" onClick={HandleBtnClick}>+/-</button>
          <button type="button" name="%" onClick={HandleBtnClick}>%</button>
          <button type="button" className="operation" name="÷" onClick={HandleBtnClick}>÷</button>
        </div>

        <div className="keys">
          <button type="button" name="7" onClick={HandleBtnClick}>7</button>
          <button type="button" name="8" onClick={HandleBtnClick}>8</button>
          <button type="button" name="9" onClick={HandleBtnClick}>9</button>
          <button type="button" className="operation" name="x" onClick={HandleBtnClick}>x</button>
        </div>
        <div className="keys">
          <button type="button" name="6" onClick={HandleBtnClick}>6</button>
          <button type="button" name="5" onClick={HandleBtnClick}>5</button>
          <button type="button" name="4" onClick={HandleBtnClick}>4</button>
          <button type="button" className="operation" name="-" onClick={HandleBtnClick}>-</button>
        </div>
        <div className="keys">
          <button type="button" name="3" onClick={HandleBtnClick}>3</button>
          <button type="button" name="2" onClick={HandleBtnClick}>2</button>
          <button type="button" name="1" onClick={HandleBtnClick}>1</button>
          <button type="button" className="operation" name="+" onClick={HandleBtnClick}>+</button>
        </div>
        <div className="keys">
          <button type="button" className="zero" name="0" onClick={HandleBtnClick}>0</button>
          <button type="button" className="dot" name="." onClick={HandleBtnClick}>.</button>
          <button type="button" className="operation" name="=" onClick={HandleBtnClick}>=</button>
        </div>
      </div>

    </div>

  );
};

export default CalculatorUI;
