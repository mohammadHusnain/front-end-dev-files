import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "../features/toDo/ToDOSlice";

export const store = configureStore({
    reducer : toDoReducer
})