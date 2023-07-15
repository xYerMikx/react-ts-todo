import { createContext } from "react";
import { ITodo } from "../../components/TodoItem/TodoItem";

export interface ITodoContextProps {
  todos: ITodo[];
  todoIdForEdit: ITodo["id"] | null;
  addTodo: ({ name, description }: Omit<ITodo, "isCompleted" | "id">) => void;
  changeTodoStatus: (id: ITodo["id"]) => void;
  deleteTodo: (id: ITodo["id"]) => void;
  chooseTodoIdForEdit: (id: ITodo["id"]) => void;
  changeTodo: ({
    name,
    description,
  }: Omit<ITodo, "isCompleted" | "id">) => void;
}

export const TodoContext = createContext({} as ITodoContextProps);
