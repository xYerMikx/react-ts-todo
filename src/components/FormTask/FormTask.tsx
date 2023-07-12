import React from "react";
import styles from "./FormTask.module.scss";

export const FormTask = () => {
  return (
    <form className={styles.form} onSubmit={e => e.preventDefault()}>
      <input
        className={styles.form__input}
        placeholder="Enter task name..."
        type="text"
      />
      <input
        className={styles.form__input}
        placeholder="Add task description..."
        type="text"
      />
      <button type="submit" className={styles.form__button}>Add Task</button>
    </form>
  );
};
