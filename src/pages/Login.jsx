import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginThunk } from "../redux/auth/operations";

export const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const submit = (data) => {
    dispatch(loginThunk(data));
    console.log(data);
    reset();
  };
  return (
    <div className="grid place-content-center min-h-[80vh]">
      <form
        onSubmit={handleSubmit(submit)}
        className="bg-slate-600 flex flex-col gap-4 px-10 py-12 shadow-2xl rounded-md"
      >
        <input
          {...register("email")}
          type="text"
          className="rounded-md px-4 py-1"
          placeholder="Enter the email..."
        />
        <input
          {...register("password")}
          type="password"
          className="rounded-md px-4 py-1"
          placeholder="Enter the password..."
        />
        <button className="bg-white rounded-md hover:bg-blue-900 hover:text-white">
          Login
        </button>
        <p className="text-white font-thin">
          You dont have account?{" "}
          <Link className="text-teal-500 font-bold underline" to="/register">
            Sign Up!
          </Link>
        </p>
      </form>
    </div>
  );
};
