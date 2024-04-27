import { createContext } from "react";
import { useReducer, useState } from "react";

export const TodoItemsContext=createContext([{
  todoItems:[],
  addNewItem:()=>{},
  deleteItem:()=>{}
}]);

// export default TodoItemsContext;

const todoItemReducer=(currTodoItems,action)=>{
  let newTodoItem=currTodoItems;
  
  if(action.type === "NEW_ITEM"){
  newTodoItem=[...currTodoItems,{name:action.payload.itemName,dueDate:action.payload.itemDueDate}]
  }
  else if(action.type === "DELETE_ITEM"){
   newTodoItem=currTodoItems.filter(item=> item.name !== action.payload.itemName);
  }
  
  return newTodoItem;
  }
  

const TodoItemsContextProvider=({children})=>{

  const [todoItems,dispathTodoItems]=useReducer(todoItemReducer,[]);

  const addNewItem=(itemName,itemDueDate)=>{
  
     const newItemAction={
      type:"NEW_ITEM",
      payload:{
       itemName,
       itemDueDate,
      }
     };
  
     dispathTodoItems(newItemAction);
  
    // console.log(`${itemName} ${itemDueDate}`)
    // const newTodoItems=[...todoItems,{name:itemName,dueDate:itemDueDate}]
    // setTodoItems(newTodoItems);
  
  }
  
  const deleteItem=(itemName)=>{
  
    const newItemAction={
      type:"DELETE_ITEM",
      payload:{
       itemName,
      }
     };
  
     dispathTodoItems(newItemAction);
  
   //const newTodoItem=todoItems.filter(item=> item.name !== itemName);
   //setTodoItems(newTodoItem);
   
  }
  return(
  <TodoItemsContext.Provider value={{
    todoItems,
    addNewItem,
    deleteItem,
    }}>
      {children}
  </TodoItemsContext.Provider>
  );
  
};

export default TodoItemsContextProvider;
