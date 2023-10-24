import React from "react";

function Typing(){
    return(
        <div className="wrap">
           <div className="static">I'm a</div>
           <ul className="dynamic" style={{marginTop:0, marginBottom:0}}>
            <li><span>Coder</span></li>
            <li><span>Guitarist</span></li>
            <li><span>Singer</span></li>
            <li><span>Gamer</span></li>
            
           </ul>
        </div>
    );
}

export default Typing;