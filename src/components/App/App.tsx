import { FormTask } from "../FormTask/FormTask";
import { TodoList } from "../TodoList/TodoList";
import { TodoProvider } from "../../utils/contexts/TodoProvider";
import styles from "./App.module.scss";
import { FC } from "react";

export const App: FC = () => {
  return (
    <TodoProvider>
      <div className={styles.app}>
        <span>Todo List</span>
        <FormTask mode="add" />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default App;
