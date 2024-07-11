import style from "./Options.module.css";

const Options = () => {
  return (
    <ul className={style.options}>
      <li className={style.optionsItem}>Good</li>
      <li className={style.optionsItem}>Neutral</li>
      <li className={style.optionsItem}>Bad</li>
    </ul>
  );
};

export default Options;
