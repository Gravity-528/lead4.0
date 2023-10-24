import React,{useState} from "react";
import Navbar from "./navbar";
import Greeting from "./greet";
import About from "./About";
import Skill from "./Skill";
import Time from "./clock";

const d=new Date();
    const custom={
        color:"",
        fontSize:"40px",
        
    }
    const a=d.getHours();
    let k;
    if(a>0 && a<=12){
        k="Good Morning";
        custom.color="#FFAC41";
    }
    else if(a>12 && a<18){
        k="Good AfterNoon";
        custom.color="#FFAC41"
    }
    else if(a>=18 && a<24){
        k="Good Evening";
        custom.color="#FFAC41"
    }
    const arr=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    let da=arr[d.getDay()];

     

function App(){
    

    const [isback,setBack]=useState("dark");

    const handleColor=()=>{
       if(isback==="dark"){
        setBack("light");
       }
       else{
        setBack("dark");
       }
    };
     console.log(isback);       
   return(
   <div style={{backgroundColor: isback==="dark" ? "black" :"white"} }>

   <Navbar 
      
    //   onChecked={handleColor}
      
   />
   
   <button className="day-night" onClick={handleColor}>click</button>

    <Greeting 
        text={k}
        dayName={da}
        styl={custom}
    />
    <h1 style={{color:"#FF1E56"}}>Hii! I'm Garvit</h1>
    
    
    <About 
        styleText={isback==="dark" ? "white" : "black"}
    />

    <Skill 
        descrip={isback==="dark" ? "white" :"black"}
    />
    <Time />

   </div>);
}
export default App;