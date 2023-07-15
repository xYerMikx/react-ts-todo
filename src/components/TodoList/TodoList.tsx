import React, { FC } from "react";
import { FormTask } from "../FormTask/FormTask";
import { ITodo, TodoItem } from "../TodoItem/TodoItem";
import styles from "./TodoList.module.scss";

interface ITodoListProps {
  todos: ITodo[];
  changeTodoStatus: (id: ITodo["id"]) => void;
  deleteTodo: (id: ITodo["id"]) => void;
  chooseTodoIdForEdit: (id: ITodo["id"]) => void;
  todoIdForEdit: ITodo["id"] | null;
  changeTodo: ({
    name,
    description,
  }: Omit<ITodo, "isCompleted" | "id">) => void;
}

export const TodoList: FC<ITodoListProps> = ({
  todos,
  changeTodoStatus,
  deleteTodo,
  chooseTodoIdForEdit,
  todoIdForEdit,
  changeTodo
}) => {
  return (
    <div>
      <div className={styles.status}>
        <div className={styles.todo}>
          <h2>To do:</h2>
          <ul className={styles.todo__list}>
            {todos
              .filter((todo) => !todo.isCompleted)
              .map((todo) => {
                if (todo.id === todoIdForEdit)
                  return (
                    <FormTask
                      key={todo.id}
                      mode="edit"
                      editTodo={{
                        name: todo.name,
                        description: todo.description,
                      }}
                      changeTodo={changeTodo}
                    />
                  );
                return (
                  <li key={todo.id}>
                    <TodoItem
                      todo={todo}
                      changeTodoStatus={changeTodoStatus}
                      deleteTodo={deleteTodo}
                      chooseTodoIdForEdit={chooseTodoIdForEdit}
                    />
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
                    <TodoItem
                      todo={todo}
                      changeTodoStatus={changeTodoStatus}
                      deleteTodo={deleteTodo}
                      chooseTodoIdForEdit={chooseTodoIdForEdit}
                    />
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};
