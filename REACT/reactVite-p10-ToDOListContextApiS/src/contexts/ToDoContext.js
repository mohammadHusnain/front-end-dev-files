import { createContext , useContext } from "react";

export const  ToDoContext = createContext({
    toDo:[{
        id:1,
        toDo:"description of what to do",
        isCompleted:false,
    }] , 

    addToDo:(toDo)=>{},
    updateToDo:(id,toDo)=>{},
    deleteToDo: (id)=>{},
    toggleComplete: (id)=>{}
})

export const useToDo = () =>{
    return useContext(ToDoContext)
}

export const TodoProvider = ToDoContext.Provider