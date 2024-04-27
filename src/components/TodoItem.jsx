import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/to-do-items-store";

function TodoItem({ todoName, todoDate,onDeleteClick }) {
  const {deleteItem}=useContext(TodoItemsContext);

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2 my-col">
          <button type="button" className="btn btn-outline-danger kg-button" onClick={()=>deleteItem(todoName)}>
          <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
