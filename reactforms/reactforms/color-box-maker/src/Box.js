import React from "react";

const Box=({id,width=10,height=10,backgroundColor="teal",handleRemove})=>{
    const remove=()=>handleRemove(id);
        console.log(id)
        return (
            <div>
                <div
                style={{
                    height:`${height}em`,
                    width:`${width}em`,
                    backgroundColor
                }}
                >
                    <button onClick={remove}>Remove The Box</button>
                    
                </div>
            </div>
        )
    

}

export default Box;
