import style from "./Display.module.css";
const display = ({ displayValue }) => {
  return (
    <input
      type="text"
      className={style.display}
      value={displayValue}
      readOnly
    />
  );
};

export default display;
