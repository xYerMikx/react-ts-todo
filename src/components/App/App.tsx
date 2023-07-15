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
    setTodoIdForEdit(null)
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

  return (
    <TodoContext.Provider value={TODOS}>
      <div className={styles.app}>
        <span>Todo List</span>
        <FormTask addTodo={addTodo} mode="add" />
        <TodoList
          todos={todos}
          changeTodoStatus={changeTodoStatus}
          deleteTodo={deleteTodo}
          chooseTodoIdForEdit={chooseTodoIdForEdit}
          todoIdForEdit={todoIdForEdit}
          changeTodo={changeTodo}
        />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
