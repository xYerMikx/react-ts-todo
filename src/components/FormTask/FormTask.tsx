import { FC, useState } from "react";
import { Button, ButtonColors } from "../../ui/Button/Button";
import { ITodo } from "../TodoItem/TodoItem";
import styles from "./FormTask.module.scss";

interface IAdd {
  addTodo: ({ name, description }: Omit<ITodo, "isCompleted" | "id">) => void;
}

const defaultTodo = { name: "", description: "" };

export const FormTask: FC<IAdd> = ({ addTodo }) => {
  const [todo, setTodo] = useState(defaultTodo);

  const onClick = () => {
    addTodo({ name: todo.name, description: todo.description });
    setTodo({ name: "", description: "" });
  };

  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <input
        className={styles.form__input}
        placeholder="Enter task name..."
        type="text"
        value={todo.name}
        onChange={(e) => setTodo({ ...todo, name: e.target.value })}
      />
      <input
        className={styles.form__input}
        placeholder="Add task description..."
        type="text"
        value={todo.description}
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
      />
      <Button color={ButtonColors.main} name="Add Task" onClick={onClick} />
    </form>
  );
};
