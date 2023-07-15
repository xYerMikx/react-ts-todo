import React, { FC, useContext } from "react";
import { FormTask } from "../FormTask/FormTask";
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoContext } from "../../utils/contexts/TodoContext";
import styles from "./TodoList.module.scss";

export const TodoList: FC = () => {
  const {
    todos,
    changeTodoStatus,
    todoIdForEdit,
    deleteTodo,
    chooseTodoIdForEdit,
  } = useContext(TodoContext);
  return (
    <div>
      <div className={styles.status}>
        <div className={styles.todo}>
          <h2>To do:</h2>
          <ul className={styles.todo__list}>
            {todos.filter((todo) => !todo.isCompleted).length > 0 ? (
              todos
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
                })
            ) : (
              <h2>No tasks to do right now. Add new task to get started!</h2>
            )}
          </ul>
        </div>
        <div className={styles.completed}>
          <h2>Completed:</h2>
          <ul className={styles.completed__list}>
            {todos.filter((todo) => todo.isCompleted).length > 0 ? (
              todos
                .filter((todo) => todo.isCompleted)
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
                })
            ) : (
              <h2>You have no completed tasks :(</h2>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
