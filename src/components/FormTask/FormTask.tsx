import { FC, useContext, useState } from "react";
import { Button, ButtonColors } from "../../ui/Button/Button";
import { ITodo } from "../TodoItem/TodoItem";
import { TodoContext } from "../../utils/contexts/TodoContext";
import styles from "./FormTask.module.scss";

interface IAddForm {
  mode: "add";
}
interface IEditForm {
  mode: "edit";
  editTodo: Omit<ITodo, "id" | "isCompleted">;
}
type FormTaskProps = IAddForm |  IEditForm
const defaultTodo = { name: "", description: "" };

export const FormTask: FC<FormTaskProps> = (props) => {
  const { changeTodo, addTodo } = useContext(TodoContext);
  const isEdit = props.mode === "edit";
  const [todo, setTodo] = useState(isEdit ? props.editTodo : defaultTodo);

  const onClick = () => {
    const todoItem = { name: todo.name, description: todo.description };
    if (isEdit) {
      return changeTodo(todoItem);
    }
    addTodo(todoItem);
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
