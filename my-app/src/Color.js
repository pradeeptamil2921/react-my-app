import { useState } from "react";
 export default function Color(){
    let yellow='yellow';
    const [bgColor,setColor] = useState(yellow);
    const changeColor =()=>{
        const recolor =`#${Math.floor(Math.random()*16777215)}`
    setColor(recolor); 
    }
    // const [bgcolor,setBgColo] = useState(yellow);
    // const changeColo =()=>{
    //     let purple ='green';
       
    // setColors(Math.random().purple*100);
    // }

    return( 
        <div  style={{width:'100px'}}>
            <div className="app" style={{background: bgColor}} onClick={changeColor}  >
            <div><button style={{background: bgColor}} className="btn btn-dark  m-2" onClick={ changeColor}>Colors</button></div>
            
            </div>
        </div>
    );
}
