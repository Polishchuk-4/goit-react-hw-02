import style from "./Feedback.module.css";

const Feedback = ({ good = 0, neutral = 0, bad = 0 }) => {
  return (
    <ul className={style.feedback}>
      <li className={style.feedbackItem}>Good: {good}</li>
      <li className={style.feedbackItem}>Neutral: {neutral}</li>
      <li className={style.feedbackItem}>Bad: {bad}</li>
      <li className={style.feedbackItem}>Total: {good + neutral + bad}</li>
      <li className={style.feedbackItem}>Positive: </li>
    </ul>
  );
};

export default Feedback;
