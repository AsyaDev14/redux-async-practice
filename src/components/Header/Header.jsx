import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";
import { logoutThunk } from "../../redux/auth/operations";

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  return (
    <header className="flex justify-between px-4 py-2 bg-blue-700 text-white font-bold items-center">
      <div className="italic text-2xl">Redux</div>
      <nav className="flex gap-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/todos">Todos</NavLink>
        {!isLoggedIn ? (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        ) : (
          <button onClick={() => dispatch(logoutThunk())}>Logout</button>
        )}
      </nav>
    </header>
  );
};
