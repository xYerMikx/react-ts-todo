import { FC, useState } from "react";
import { Button, ButtonColors } from "../../ui/Button/Button";
import { ITodo } from "../TodoItem/TodoItem";
import styles from "./FormTask.module.scss";

interface IAddForm {
  mode: "add";
  addTodo: ({ name, description }: Omit<ITodo, "isCompleted" | "id">) => void;
}
interface IEditForm {
  mode: "edit";
  editTodo: Omit<ITodo, "id" | "isCompleted">;
  changeTodo: ({
    name,
    description,
  }: Omit<ITodo, "isCompleted" | "id">) => void;
}

type FormTaskProps = IAddForm | IEditForm;

const defaultTodo = { name: "", description: "" };

export const FormTask: FC<FormTaskProps> = (props) => {
  const isEdit = props.mode === "edit";
  const [todo, setTodo] = useState(isEdit ? props.editTodo : defaultTodo);

  const onClick = () => {
    const todoItem = { name: todo.name, description: todo.description };
    if (isEdit) {
      return props.changeTodo(todoItem);
    }
    props.addTodo(todoItem);
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
      {isEdit ? (
        <Button color={ButtonColors.main} name="Edit Task" onClick={onClick} />
        ) : (
        <Button color={ButtonColors.main} name="Add Task" onClick={onClick} />
      )}
    </form>
  );
};
