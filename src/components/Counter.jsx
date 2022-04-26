import {useState} from "react";
import "./Counter.css";

export const Counter= ()=>{
    const[counter, setCounter]= useState(1)
    const onClick= ()=>{
           if(counter>=1000){
               alert("max number");
           } 
           else{
               setCounter(counter+1);
           }
           
    }
    const onClickdec=()=>{
        if(counter<=1){
            alert("min number");
        } 
        else{
            setCounter(counter-1);
        }
    }
    return(
        <div className="container">
            <h1 className="dec" onClick={()=>{onClickdec()}}>-</h1>
            <h1>{counter}</h1>
            <h1 className="inc" onClick={()=>{onClick()}}>+</h1>
            
        </div>
    )
}