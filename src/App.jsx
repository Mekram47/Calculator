import { useState } from "react";
import style from "./App.module.css";
import ButtonContainer from "./components/ButtonContainer";
import Display from "./components/Display";

function App() {
  let [calVal, setcalVal] = useState("");
  const onButtonClick = (event) => {
    if (event.target.innerText === "C") {
      setcalVal("");
    } else if (event.target.innerText === "=") {
      const result = eval(calVal);
      setcalVal(result);
    } else {
      const newDisplay = calVal + event.target.innerText;
      setcalVal(newDisplay);
    }
  };
  return (
    <div className={style.container}>
      <Display displayValue={calVal} />
      <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
    </div>
  );
}

export default App;
