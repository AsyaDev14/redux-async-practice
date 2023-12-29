import { createSlice } from "@reduxjs/toolkit";
import { addTodoThunk, deleteTodoThunk, fetchTodoThunk } from "./operations";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodoThunk.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addTodoThunk.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteTodoThunk.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (todo) => todo.id !== action.payload.id
        );
      });
  },
});
export const todoReducer = slice.reducer;
