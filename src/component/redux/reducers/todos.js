import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      id: 123123,
      text: "bbbbbbbbb",
    },
    {
      id: 22222,
      text: "aaaaaaaa",
    },
  ],
};

const todos = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.data.push({
        id: Date.now(),
        ...action.payload,
      });
    },
    toggleTodo: (state, action) => {
      const todo = state.data.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo: (state, action) => {
      state.data = state.data.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todoIndex = state.data.findIndex((todo) => todo.id === id);
      if (todoIndex !== -1) {
        state.data[todoIndex].text = text;
      }
    },
  },
});

export const { addTodo, toggleTodo, removeTodo, updateTodo } = todos.actions;
export default todos.reducer; //export reducer
