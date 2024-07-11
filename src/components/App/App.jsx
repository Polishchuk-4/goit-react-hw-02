// import { useState } from "react";

import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";

import style from "./App.module.css";

function App() {
  return (
    <div className={style.app}>
      <Description
        title="Sip Happens Café"
        subtitle="Please leave your feedback about our service by selecting one of the options below."
      />
      <Options />
      <Feedback />
    </div>
  );
}

export default App;
