import React,{useState} from "react";

const Todo =({task, id,remove})=>{
    const handleRemove=()=>remove(id);
    

    // const remove=()=>handleRemove(id);
    return (
        <div>
            <ul>
                <div style={{display:"inline-block"}}>
                <li>
                {task}
                </li>
                <button onClick={handleRemove}>X</button>
                </div>
               
            </ul>
        </div>
    )
}

export default Todo;