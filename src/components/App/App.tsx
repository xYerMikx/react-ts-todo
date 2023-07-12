import React from "react";
import { FormTask } from "../FormTask/FormTask";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <span>Todo List</span>
      <FormTask />
    </div>
  );
}

export default App;
