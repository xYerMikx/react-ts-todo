import { useState } from "react";
import { FormTask } from "../FormTask/FormTask";
import { ITodo } from "../TodoItem/TodoItem";
import { TodoList } from "../TodoList/TodoList";
import { TodoContext } from "../utils/TodoContext";
import styles from "./App.module.scss";

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

function App() {
  const [todos, setTodos] = useState(TODOS);

  const addTodo = ({
    name,
    description,
  }: Omit<ITodo, "isCompleted" | "id">) => {
    setTodos([
      ...todos,
      {
        id: todos[todos.length - 1].id + 1,
        name,
        description,
        isCompleted: false,
      },
    ]);
  };
  const changeTodoStatus = (id: ITodo['id']) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      })
    );
  };

  return (
    <TodoContext.Provider value={TODOS}>
      <div className={styles.app}>
        <span>Todo List</span>
        <FormTask addTodo={addTodo} />
        <TodoList todos={todos} changeTodoStatus={changeTodoStatus} />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
