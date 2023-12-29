import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { registrThunk } from "../redux/auth/operations";

export const Register = () => {
  const { register, handleSubmit, reset } = useForm();

  const dispatch = useDispatch();
  const submit = (data) => {
    console.log(data);
    dispatch(registrThunk(data));
    reset();
  };
  return (
    <div className="grid place-content-center min-h-[80vh]">
      <form
        onSubmit={handleSubmit(submit)}
        className="bg-slate-600 flex flex-col gap-4 px-10 py-12 shadow-2xl rounded-md"
      >
        <input
          type="text"
          className="rounded-md px-4 py-1"
          placeholder="Enter the name..."
          {...register("name")}
        />
        <input
          type="text"
          className="rounded-md px-4 py-1"
          placeholder="Enter the email..."
          {...register("email")}
        />
        <input
          type="password"
          className="rounded-md px-4 py-1"
          placeholder="Enter the password..."
          {...register("password")}
        />
        <button className="bg-white rounded-md hover:bg-blue-900 hover:text-white">
          Register
        </button>
        <p className="text-white font-thin">
          You already have account?{" "}
          <Link className="text-teal-500 font-bold underline" to="/login">
            Login!
          </Link>
        </p>
      </form>
    </div>
  );
};
