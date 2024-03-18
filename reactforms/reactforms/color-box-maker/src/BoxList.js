import React,{useState} from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
//import {v4 as uuid} from "uuid";

const BoxList =()=>{
    const INITIAL_STATE =[];
    
    const [boxes,setBoxes]=useState(INITIAL_STATE);
    const addBox = obj=>{
        setBoxes(boxes=>[...boxes,obj])
    }
    const remove =(id)=>{
        setBoxes(boxes=>boxes.filter(box=>box.id !==id))
    }

    const boxComponents =boxes.map(box =>(
        <Box id={box.id} key={box.id} width={box.width} 
        height={box.height} backgroundColor={box.backgroundColor}
        handleRemove={remove}
     />
     ))
    return (
        <div>
            {/* {boxes.map(box =>{
                <Box id={box.id} key={box.id} width={box.width} 
                height={box.height} backgroundColor={box.backgroundColor}
                handleRemove={remove}
                />
                })
        } */}
       
            <NewBoxForm addBox={addBox}/>
            {boxComponents}
        </div>
    )
}

export default BoxList;
