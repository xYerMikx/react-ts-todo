/* eslint-disable react-hooks/exhaustive-deps */
import { FC, ReactNode, useMemo, useState } from "react";
import { ITodo } from "../../components/TodoItem/TodoItem";
import { TodoContext } from "./TodoContext";
import { toast } from "react-toastify";

interface ITodoProviderProps {
  children: ReactNode;
}

const TODOS = [
  {
    id: 1,
    name: "Make todo list",
    description:
      "Make todo list using the description here: https://docs.google.com/document/d/1pi3DlGltYaddgObFd-fJS9neihnZPhhuzNQOj76av-4/edit",
    isCompleted: true,
  },
  {
    id: 2,
    name: "Get a react traineeship",
    description:
      "Get react traineeship here: https://hh.ru/vacancy/83275072?hhtmFrom=chat",
    isCompleted: false,
  },
  {
    id: 3,
    name: "Become a beast at react/react native",
    description: "Make progress in react / react native creating stunning apps",
    isCompleted: false,
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
  const notify = () =>
    toast.error("Please, fill in all fields!", { pauseOnHover: false });
  const addTodo = ({
    name,
    description,
  }: Omit<ITodo, "isCompleted" | "id">) => {
    if (name.trim() === "" || description.trim() === "") {
      notify();
      return;
    }
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

  const clearTodos = () => {
    setTodos([]);
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
      clearTodos,
    }),
    [
      todoIdForEdit,
      todos,
      deleteTodo,
      changeTodo,
      addTodo,
      changeTodoStatus,
      chooseTodoIdForEdit,
      clearTodos,
    ]
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
