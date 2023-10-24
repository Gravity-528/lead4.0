import React,{useState} from "react";
function Navbar(props){
    
    const [colorNav1,setColor1]=useState("white");
    const [colorNav2,setColor2]=useState("white");
    const [colorNav3,setColor3]=useState("white");
    const [colorNav4,setColor4]=useState("white");
    const [colorNav5,setColor5]=useState("white");
    const [colorNav6,setColor6]=useState("white");


    
    function handleMouse1(){
        setColor1("#FF1E56"); 
    }
    function handleMouse2(){
        setColor2("#FF1E56");
    }
    function handleMouse3(){
        setColor3("#FF1E56");
    }
    function handleMouse4(){
        setColor4("#FF1E56");
    }
    function handleMouse5(){
        setColor5("#FF1E56");
    }
    function handleMouse6(){
        setColor6("#FF1E56")
    }
    function HandleMouseO(){
        setColor1("#FFAC41");
        setColor2("#FFAC41");
        setColor3("#FFAC41");
        setColor4("#FFAC41");
        setColor5("#FFAC41");
        setColor6("white");
    }
     return(
    <div className="navbar">
         
    <div className="container">
        <nav className="hu">HELLO</nav>
        
        <div  className="text" onMouseOver={handleMouse1} onMouseOut={HandleMouseO}><a style={{color:colorNav1}}  href="#">Home</a></div>
        <div className="text" onMouseOver={handleMouse2} onMouseOut={HandleMouseO}><a style={{color:colorNav2}}  href="#">About</a></div>
        <div className="text" onMouseOver={handleMouse3} onMouseOut={HandleMouseO}><a style={{color:colorNav3}}  href="#">Skills</a></div>
        <div className="text" onMouseOver={handleMouse4} onMouseOut={HandleMouseO}><a style={{color:colorNav4}} s href="">Project</a></div>
        <div className="text" onMouseOver={handleMouse5} onMouseOut={HandleMouseO}><a style={{color:colorNav5}} href="">Social</a></div>



        
        <div className="text" ><a onClick={()=>{props.onChecked}} href="">Mode</a></div>
        
     </div>
     </div>)
}
export default Navbar;