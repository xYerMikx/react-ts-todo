import React, { FC } from "react";
import { Button, ButtonColors } from "../../ui/Button/Button";
import styles from "./TodoItem.module.scss";

export interface ITodo {
  id: number;
  name: string;
  description: string;
  isCompleted: boolean;
}

export interface ITodoProps {
  todo: ITodo;
  changeTodoStatus: (id: ITodo["id"]) => void;
  deleteTodo: (id: ITodo["id"]) => void;
  chooseTodoIdForEdit: (id: ITodo["id"]) => void;
}

export const TodoItem: FC<ITodoProps> = ({
  todo,
  changeTodoStatus,
  deleteTodo,
  chooseTodoIdForEdit,
}) => {
  return (
    <div className={styles.item}>
      <input
        className={styles.item__checkbox}
        type="checkbox"
        defaultChecked={todo.isCompleted}
        id={`${todo.id}`}
        onClick={() => changeTodoStatus(todo.id)}
      />
      <label className={styles.item__label} htmlFor={`${todo.id}`}></label>
      <p className={styles.item__name}>{todo.name}</p>
      <p className={styles.item__description}>{todo.description}</p>
      <div className={styles.item__buttons}>
        <Button
          onClick={() => chooseTodoIdForEdit(todo.id)}
          textColor="#9994ff"
          color={ButtonColors.edit}
          name="Edit"
        />
        <Button
          onClick={() => deleteTodo(todo.id)}
          color={ButtonColors.delete}
          name="Delete"
        />
      </div>
    </div>
  );
};
