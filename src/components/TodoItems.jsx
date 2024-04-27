import { useContext, useState } from "react";
import { TodoItemsContext } from "../store/to-do-items-store";
import TodoItem from "./ToDoItem";

import styles from "./TodoItems.module.css";

const TodoItems = () => {
  
  const {todoItems}=useContext(TodoItemsContext);
  

  console.log('Items from context')
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem todoDate={item.dueDate} todoName={item.name}></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
