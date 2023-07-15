/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, ReactNode, useMemo, useState } from "react";
import { ITodo } from "../../components/TodoItem/TodoItem";
import { TodoContext } from "./TodoContext";

interface ITodoProviderProps {
  children: ReactNode;
}
const TODOS = [
  {
    id: 1,
    name: "Task Name",
    description: "You need to do something special using React or React Native",
    isCompleted: false,
  },
  {
    id: 2,
    name: "Task",
    description: "This is something great",
    isCompleted: false,
  },
  {
    id: 3,
    name: "Task",
    description: "This is something insane",
    isCompleted: true,
  },
];

export const TodoProvider: FC<ITodoProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState(TODOS);
  const [todoIdForEdit, setTodoIdForEdit] = useState<ITodo["id"] | null>(null);

  const chooseTodoIdForEdit = (id: ITodo["id"]) => {
    setTodoIdForEdit(id);
  };

  const changeTodo = ({
    name,
    description,
  }: Omit<ITodo, "isCompleted" | "id">) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoIdForEdit) {
          return { ...todo, name, description };
        }
        return todo;
      })
    );
    setTodoIdForEdit(null);
  };
  
  const addTodo = ({
    name,
    description,
  }: Omit<ITodo, "isCompleted" | "id">) => {
    setTodos([
      ...todos,
      {
        id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
        name,
        description,
        isCompleted: false,
      },
    ]);
  };
  const changeTodoStatus = (id: ITodo["id"]) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id: ITodo["id"]) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const value = useMemo(
    () => ({
      todoIdForEdit,
      todos,
      deleteTodo,
      changeTodo,
      addTodo,
      changeTodoStatus,
      chooseTodoIdForEdit,
    }),
    [
      todoIdForEdit,
      todos,
      deleteTodo,
      changeTodo,
      addTodo,
      changeTodoStatus,
      chooseTodoIdForEdit,
    ]
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};