import {useState} from "react";
import "./Counter.css";

export const Counter= ()=>{
    const [counter, setCounter] = useState("1");

  function handleChange(e) {
    let num = "";

    num += e.target.value;

    if (+num > 1000) {
      console.log("max");
      return;
    } else {
      console.log(typeof +num);
      setCounter(num);
    }
    
  }
  
    return(
        <div className="counter">
        <button className="dec" onClick={() =>  {if(+counter<=1){alert("min")}else{setCounter(counter - 1)}}}>-</button>
        <input type="number" value={counter} onChange={handleChange} />
        <button className="inc" onClick={() => {if(+counter>=1000){alert("max")}else{setCounter(+counter + 1)}}}>+</button>
      </div>
    )
}