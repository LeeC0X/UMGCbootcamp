import React,{useState} from "react";
import {v4 as uuid} from "uuid";


const NewTodoForm =({create})=>{

    const [task,setTask]=useState("");
    const handleChange =(e)=>{
        setTask(e.target.value);
    } 
    const handleSubmit =(e)=>{
        e.preventDefault();
        create({task,id:uuid()})
        setTask("")

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="task">Task List:</label>
                <input id="task" name="task" type="text" onChange={handleChange}
                value={task}
                placeholder="Task"
                />
                <button>Add Task</button>
            </form>
        </div>
    )
}

export default NewTodoForm;