import React from "react";
import { deleteTodoThunk } from "../../redux/todos/operations";
import { useDispatch } from "react-redux";

export const TodoItem = ({ text, id, completed }) => {
  const dispatch = useDispatch();
  return (
    <li className=" py-2 px-4 list-none border-2 border-black rounded-md flex justify-between items-center">
      <div className="flex gap-2">
        <input type="checkbox" />
        <h2>{text}</h2>
      </div>
      <div>
        <div className="flex gap-4">
          <button
            onClick={() => console.log(text)}
            className="border-2 border-black px-4 py-1 rounded-md hover:bg-green-500"
          >
            Edit
          </button>
          <button
            className="border-2 border-black px-4 py-1 rounded-md hover:bg-green-500"
            onClick={() => dispatch(deleteTodoThunk(id))}
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};
