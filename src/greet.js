import React from "react";

function Greeting(props){
    return(
        <div style={props.styl} className="greet">
            {props.text}
            <div>Today is {props.dayName}</div>
        </div>)
}
export default Greeting;