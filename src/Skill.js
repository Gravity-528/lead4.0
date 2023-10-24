import React from "react";

function Skill(props){
    return(
        <div className="About">
        <div className="Head" style={{fontSize:"70px",fontWeight:400}}>Skills</div>
        <div className="gridSet">
            <div>
            <img src="https://cdn-icons-png.flaticon.com/512/6132/6132222.png" width={200}></img>
            <div><button style={{color:props.descrip}}>C++</button></div>
            </div>
            <div>
                <img src="https://i.pinimg.com/originals/86/ad/01/86ad01aac334ed269e9d33dab95a2217.png" width={250}></img>
                <div><button style={{color:props.descrip}}>Java</button></div>
            </div>
            <div>
                <img src="https://icons.veryicon.com/png/o/business/vscode-program-item-icon/react-3.png" width={250}></img>
                <div><button style={{color:props.descrip}}>React</button></div>
            </div>
            <div>
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png" width={250}></img>
                <div><button style={{color:props.descrip}}>BootStrap</button></div>
            </div>
            <div>
                <img src="https://icons.veryicon.com/png/o/file-type/file-type-icon-library/html-41.png" width={250}></img>
                <div><button style={{color:props.descrip}}>Html</button></div>
            </div>
            <div>
                <img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png" width={250}></img>
                <div><button style={{color:props.descrip}}>Css</button></div>
            </div>
            <div>
                <img src="https://www.svgrepo.com/show/452045/js.svg" width={250}></img>
                <div><button style={{color:props.descrip}}>JavaScript</button></div>
            </div>
            <div>
                <img src="https://www.svgrepo.com/show/400304/guitar.svg" width={250}></img>
                <div><button style={{color:props.descrip}}>Guitar</button></div>
            </div>

        </div>
        </div>
    );
}
export default Skill;