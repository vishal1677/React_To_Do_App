import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from './components/WelcomeMessage'

import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useReducer, useState } from "react";
import TodoItemsContextProvider, { TodoItemsContext } from "./store/to-do-items-store";


function App() {

  return (
    <TodoItemsContextProvider>
    <center className="todo-container">
      <AppName />
      <AddTodo/>
      <WelcomeMessage></WelcomeMessage>
      <TodoItems></TodoItems>
    </center>
    </TodoItemsContextProvider>
  );

}

export default App;
