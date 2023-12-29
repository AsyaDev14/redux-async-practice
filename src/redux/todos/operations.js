// https://6585af9d022766bcb8c927c2.mockapi.io/todos

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6585af9d022766bcb8c927c2.mockapi.io/";

// axios.get('todos')
// axios.post('todos', body)
// axios.put('todos/${id}', body)

export const fetchTodoThunk = createAsyncThunk(
  "todos/fetch",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("todos");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTodoThunk = createAsyncThunk(
  "todos/addTodo",
  async (body, thunkAPI) => {
    try {
      const { data } = await axios.post("todos", body);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTodoThunk = createAsyncThunk(
  "todos/deleteTodo",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`todos/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
