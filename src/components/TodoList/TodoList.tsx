import React, { FC, useContext } from "react";
import { FormTask } from "../FormTask/FormTask";
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoContext } from "../../utils/contexts/TodoContext";
import styles from "./TodoList.module.scss";
import { Button, ButtonColors } from "../../ui/Button/Button";

export const TodoList: FC = () => {
  const {
    todos,
    changeTodoStatus,
    todoIdForEdit,
    deleteTodo,
    chooseTodoIdForEdit,
    clearTodos,
  } = useContext(TodoContext);

  const filteredTodos = (isCompleted: boolean) =>
    todos.filter((todo) => todo.isCompleted === isCompleted);

  const renderTodoList = (isCompleted: boolean) => {
    const filtered = filteredTodos(isCompleted);
    if (filtered.length === 0) {
      return (
        <h2>
          {isCompleted
            ? "You have no completed tasks :("
            : "No tasks to do right now. Add new task to get started!"}
        </h2>
      );
    }
    return filtered.map((todo) => {
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
    });
  };

  return (
    <div>
      <hr className={styles.hr} />
      <Button color={ButtonColors.edit} name="Clear All" textColor={ButtonColors.main} onClick={clearTodos} />
      <div className={styles.status}>
        <div className={styles.todo}>
          <h2>To do:</h2>
          <ul className={styles.todo__list}>{renderTodoList(false)}</ul>
        </div>
        <div className={styles.completed}>
          <h2>Completed:</h2>
          <ul className={styles.completed__list}>{renderTodoList(true)}</ul>
        </div>
      </div>
    </div>
  );
};
