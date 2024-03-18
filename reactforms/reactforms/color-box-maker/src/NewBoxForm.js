import React,{useState} from "react";
import {v4 as uuid} from "uuid";
import "./NewBoxForm.css";


const NewBoxForm=({addBox})=>{
    const INITIAL_STATE={
        width:"",
        height:"",
        backgroundColor:""
    }
    const [formData,setFormdata]=useState(INITIAL_STATE);
  
    const handleChange =(e)=>{
        const {name,value}=e.target;
      
        setFormdata(formData=>({
            ...formData,[name]:value
        }))

    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        addBox({...formData,id:uuid()})
        setFormdata(INITIAL_STATE)

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="height">Height</label>
                    <input onChange={handleChange} 
                    type="text"
                    name="height"
                    value={formData.height}
                    placeholder="height"
                    id="height" 
                    />
                </div>
                <div>
                    <label htmlFor="width">Width</label>
                    <input onChange={handleChange} 
                    type="text"
                    name="width"
                    value={formData.width}
                    id="width" 
                    placeholder="width"
                    />
                </div>
                <div>
                    <label htmlFor="backgroundColor">Background Color</label>
                    <input onChange={handleChange} 
                    type="text"
                    name="backgroundColor"
                    value={formData.backgroundColor}
                    id="backgroundColor" 
                    placeholder="background color"
                    />
                </div>
                <button id="newBoxButton">Add a new box</button>
            </form>
        </div>
    )
}
export default NewBoxForm;