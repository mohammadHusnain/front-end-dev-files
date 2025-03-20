import { createSlice, nanoid } from "@reduxjs/toolkit";

// Initial state for the todo list
const initialState = {
    todos: [{
        id: 1,
        text: "hello world!"
    }]
};

// Create a slice for managing todos
export const ToDoSlice = createSlice({
    name: 'todo', // Name of the slice
    initialState, // Initial state
    reducers: {
        // Add a new todo
        addToDo: (state, action) => {
            const todo = {
                id: nanoid(), // Generate a unique ID for the todo
                text: action.payload // Use the payload as the todo text
            };
            state.todos.push(todo); // Add the new todo to the todos array
        },

        // Remove a todo by ID
        removeToDo: (state, action) => {
            // Filter out the todo with the matching ID
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },

        // Update a todo by ID
        updateToDo: (state, action) => {
            const { id, newText } = action.payload; // Extract the ID and new text from the payload
            // Find the todo to update
            const todoToUpdate = state.todos.find((todo) => todo.id === id);
            if (todoToUpdate) {
                todoToUpdate.text = newText; // Update the todo's text
            }
        }
    }
});

// Export the actions for use in components
export const { addToDo, removeToDo, updateToDo } = ToDoSlice.actions;

// Export the reducer for use in the store
export default ToDoSlice.reducer;