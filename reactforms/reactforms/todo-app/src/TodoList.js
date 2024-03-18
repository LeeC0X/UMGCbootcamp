import React,{useState} from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";


const TodoList =()=>{
    const [todos,setTodos]=useState([])

   //function to add a new todo 
   const addTodo = newTodo =>{
    setTodos(todos=>[...todos,newTodo])
   }
   const remove =(id)=>{
        setTodos(todos=>todos.filter(todo =>todo.id!==id))
   }

   const todoComponents =todos.map(todo =>(
    <Todo id={todo.id} task={todo.task} remove={remove}/>
   ))

    return (
        <div>
            <h3>Daily </h3>
            <h1>Todo List:</h1>
            <NewTodoForm create={addTodo}/>
            {todoComponents}
        </div>
    )
}

export default TodoList;