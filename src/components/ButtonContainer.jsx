import style from "./ButtonContainer.module.css";
const ButtonContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={style.buttonContainer}>
      {buttonNames.map((buttonNames) => (
        <button onClick={onButtonClick} className={style.btns}>
          {buttonNames}
        </button>
      ))}
    </div>
  );
};
export default ButtonContainer;
