import { useContext, useRef, useState } from "react";
import styles from "./AddTodo.module.css";
import { IoAddCircleOutline } from "react-icons/io5";
import { TodoItemsContext } from "../store/to-do-items-store";

function AddTodo() {

  const [todoName,setTodoName]=useState();
  const [dueDate,setDueDate]=useState();
  // const todoNameElement =useRef();
  // const dueDateElement=useRef();

  const handleOnNameChange=(event)=>{
   setTodoName(event.target.value)
  }

  const handleOnDateChange=(event)=>{
   setDueDate(event.target.value);
  }

 const {addNewItem}=useContext(TodoItemsContext);


  const handleOnButtonClicked=()=>{
   addNewItem(todoName,dueDate)
   setTodoName("");
   setDueDate("");
  }

  return (
    <div className="container text-center">
      <div className={`row ${styles['kg-row']}`}
      >
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" className={`${styles['input']}`}
          value={todoName}
          onChange={handleOnNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date"  
           value={dueDate}
           onChange={handleOnDateChange}
          />
        </div>
        <div className="col-2">
          <button 
           className={`btn btn-outline-info ${styles['kg-button']}`}
           onClick={handleOnButtonClicked}
           >
           <IoAddCircleOutline />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
