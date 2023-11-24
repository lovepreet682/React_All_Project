import { configureStore } from "@reduxjs/toolkit";
import { todoList } from "../features/myReducers/TodoSlice";

export const store = configureStore({
    reducer:todoList
})