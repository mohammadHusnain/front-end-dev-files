import { useState, useEffect } from "react";
import { TodoProvider } from "./contexts";
import "./App.css";
import TodoForm from "./components/ToDoForm";
import TodoItem from "./components/ToDoItem";

function App() {
  const [toDos, setToDo] = useState([]);

  // Add a new todo
  const addToDo = (todo) => {
    setToDo((prev) => [{ id: Date.now(), ...todo }, ...prev]); // Fixed spread operator
  };

  // Update an existing todo
  const updateToDo = (id, todo) => {
    setToDo((prev) =>
      prev.map((prevToDo) => (prevToDo.id === id ? todo : prevToDo))
    );
  };

  // Delete a todo
  const deleteToDo = (id) => {
    setToDo((prev) => prev.filter((todo) => todo.id !== id));
  };

  // Toggle the completed status of a todo
  const toggleComplete = (id) => {
    setToDo((prev) =>
      prev.map((prevToDo) =>
        prevToDo.id === id
          ? { ...prevToDo, completed: !prevToDo.completed }
          : prevToDo
      )
    );
  };

  // Load todos from localStorage on component mount
  useEffect(() => {
    const toDos = JSON.parse(localStorage.getItem("toDos"));
    if (toDos && toDos.length > 0) {
      setToDo(toDos);
    }
  }, []);

  // Save todos to localStorage whenever toDos changes
  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(toDos));
  }, [toDos]);

  return (
    <TodoProvider
      value={{ toDos, addToDo, updateToDo, deleteToDo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {toDos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
 