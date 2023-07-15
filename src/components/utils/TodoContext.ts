import { createContext } from 'react';
import { ITodo } from '../TodoItem/TodoItem';

export const TodoContext = createContext([] as ITodo[])