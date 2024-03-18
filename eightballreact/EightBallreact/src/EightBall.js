import React,{useState} from "react";
import "./EightBall.css";
const choice = (arr)=>{
    const randomIdx = Math.floor(Math.random() * arr.length);
    console.log(randomIdx)
    return arr[randomIdx]
}



const EightBall = (props)=>{
    const [msg,setMsg]=useState("Think of a Question");
    const [color,setColor]=useState('black');
    const [green,setGreen]=useState(0)
    const [red,setRed] =useState(0)
    const [goldenRod,setGoldenrod]=useState(0)
    const handleClick =()=>{
        const {msg,color}=choice(props.answers)
        setMsg(msg);
        setColor(color)
        if(color==="red"){
            setRed(red+1)
        } 
        if(color==="green"){
            setGreen(green+1)
        } 
        if(color==="goldenrod"){
            setGoldenrod(goldenRod+1)
        }

    }
    const restart = ()=>{
         setColor('black')
         setMsg('Think of a question')
         setGreen(0)
         setRed(0)
         setGoldenrod(0)
    }

    const countNumColor =()=>{


    }
    return (<div>
    <div className="EightBall"
        onClick={handleClick}
        style={{ backgroundColor: color }}> {msg}
        
        </div>
        <h4>Green Count:{green}</h4>
        <h4>Red Count:{red}</h4>
        <h4>Goldenrod Count:{goldenRod}</h4>
        <button id="reset" onClick ={restart}>Reset Game</button>
    </div>
        
    )
   

}

EightBall.defaultProps = {answers: [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
  ]};

export default EightBall;