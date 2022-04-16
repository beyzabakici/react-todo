import { createSlice } from "@reduxjs/toolkit";
import { loadState, saveState } from "../localstorage";
const initialState = loadState() ? loadState: [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add: (state, action) => {
      const newTodo = {
        id: Date.now().toString(),
        date: action.payload.date,
        content: action.payload.content,
        isCompleted: false,
        isFavoriteItem: false,
      };
      state.push(newTodo);
      saveState(state);
    },
    remove: (state, action) => {
      state.filter((todo) => todo.id !== action.payload);
    },
    addFavorite: (state, action) => {
      state.map((todo) => {
        if (todo.id === action.payload) {
          todo.isFavoriteItem = true;
        }
      });
    },
    removeFavorite: (state, action) => {
      state.map((todo) => {
        if (todo.id === action.payload) {
          todo.isFavoriteItem = false;
        }
      });
    },
    onComplete: (state, action) => {
      state.map((todo) => {
        if (todo.id === action.payload) {
          todo.isCompleted = true;
        }
      });
    },
    undoComplete: (state, action) => {
      state.map((todo) => {
        if (todo.id === action.payload) {
          todo.isCompleted = false;
        }
      });
    },
  },
});

export const {
  add,
  remove,
  addFavorite,
  removeFavorite,
  onComplete,
  undoComplete,
} = todoSlice.actions;

export default todoSlice.reducer;
