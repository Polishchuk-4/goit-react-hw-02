import style from "./Options.module.css";

const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
  return (
    <ul className={style.options}>
      <li className={style.optionsItem}>
        <button
          className={style.optionsBtn}
          onClick={() => updateFeedback("good")}
        >
          Good
        </button>
      </li>
      <li className={style.optionsItem}>
        <button
          className={style.optionsBtn}
          onClick={() => updateFeedback("neutral")}
        >
          Neutral
        </button>
      </li>
      <li className={style.optionsItem}>
        <button
          className={style.optionsBtn}
          onClick={() => updateFeedback("bad")}
        >
          Bad
        </button>
      </li>
      {totalFeedback > 0 && (
        <li className={style.optionsItem}>
          <button className={style.optionsBtn} onClick={() => resetFeedback()}>
            Reset
          </button>
        </li>
      )}
    </ul>
  );
};

export default Options;
