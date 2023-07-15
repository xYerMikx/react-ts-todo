import React, { FC } from "react";
import { ITodo, TodoItem } from "../TodoItem/TodoItem";
import styles from "./TodoList.module.scss";

interface ITodoListProps {
  todos: ITodo[];
  changeTodoStatus: (id: ITodo['id']) => void;
}

export const TodoList: FC<ITodoListProps> = ({ todos, changeTodoStatus }) => {
  return (
    <div>
      <div className={styles.status}>
        <div className={styles.todo}>
          <h2>To do:</h2>
          <ul className={styles.todo__list}>
            {todos
              .filter((todo) => !todo.isCompleted)
              .map((todo) => {
                return (
                  <li key={todo.id}>
                    <TodoItem todo={todo} changeTodoStatus={changeTodoStatus} />
                  </li>
                );
              })}
          </ul>
        </div>
        <div className={styles.completed}>
          <h2>Completed:</h2>
          <ul className={styles.completed__list}>
            {todos
              .filter((todo) => todo.isCompleted)
              .map((todo) => {
                return (
                  <li key={todo.id}>
                    <TodoItem todo={todo} changeTodoStatus={changeTodoStatus} />
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};
