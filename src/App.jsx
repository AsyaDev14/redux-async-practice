import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { TodoList } from "./components/TodoList/TodoList";
import { Homepage } from "./pages/Homepage";
import { NotFound } from "./pages/NotFound";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { refreshThunk } from "./redux/auth/operations";

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  return (
    <>
      <Header />

      <div className="px-4 ">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/todos" element={<TodoList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};
