// import { useState } from "react";

import style from "./Feedback.module.css";

const Feedback = ({ good, neutral, bad, totalFeedback, positiveFeedback }) => {
  return (
    <ul className={style.feedback}>
      <li className={style.feedbackItem}>Good: {good}</li>
      <li className={style.feedbackItem}>Neutral: {neutral}</li>
      <li className={style.feedbackItem}>Bad: {bad}</li>
      <li className={style.feedbackItem}>Total: {totalFeedback}</li>
      <li className={style.feedbackItem}>Positive: {positiveFeedback}%</li>
    </ul>
  );
};

export default Feedback;
