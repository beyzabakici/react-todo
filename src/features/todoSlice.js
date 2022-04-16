import { createSlice } from "@reduxjs/toolkit";
import { loadState, saveState } from "../localstorage";
const initialState = loadState() ? loadState : [];

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
      saveState(state.filter((todo) => todo.id !== action.payload));
      return state.filter((todo) => todo.id !== action.payload);
    },

    addFavorite: (state, action) => {
      state.map((todo) => {
        if (todo.id === action.payload) {
          todo.isFavoriteItem = true;

          return;
        }
      });
      saveState(state);
    },

    removeFavorite: (state, action) => {
      state.map((todo) => {
        if (todo.id === action.payload) {
          todo.isFavoriteItem = false;

          return;
        }
      });
      saveState(state);
    },

    onComplete: (state, action) => {
      state.map((todo) => {
        if (todo.id === action.payload) {
          todo.isCompleted = true;

          return;
        }
      });
      saveState(state);
    },
    undoComplete: (state, action) => {
      state.map((todo) => {
        if (todo.id === action.payload) {
          todo.isCompleted = false;

          return;
        }
      });
      saveState(state);
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
