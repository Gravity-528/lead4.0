import React ,{useState}from "react";

function Time(){
    setInterval(update,1000);
    const tim=new Date().toLocaleTimeString();
    const [TellTime,updateTime]=useState(tim);
    function update(){
        const newTime=new Date().toLocaleTimeString();
        updateTime(newTime);
    }
    return (
        <div style={{color:"white"}}>
           {TellTime}
        </div>
    );
}
export default Time;