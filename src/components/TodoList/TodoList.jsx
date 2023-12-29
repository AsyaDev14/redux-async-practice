import { TodoItem } from "./TodoItem";
import { AddTodoForm } from "./AddTodoForm";
import { selectTodos } from "../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTodoThunk } from "../../redux/todos/operations";

export const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);

  useEffect(() => {
    dispatch(fetchTodoThunk());
  }, [dispatch]);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center underline mb-4">
        Welcome to todo list
      </h1>
      <AddTodoForm />

      {todos.length ? (
        <ul className="grid gap-4 w-[90vw] mx-auto">
          {todos.map((item) => (
            <TodoItem key={item.id} {...item} />
          ))}
        </ul>
      ) : (
        <h1 className="text-4xl text-center font-bold ">
          There is no todos yet!!!
        </h1>
      )}
    </div>
  );
};
