import { useState } from "react";
import Color from "./Color";

export default function Click(){
     const k = ()=>{
         console.log("Hello");
         setName('K7')
     }
     const [name,setName]=useState('Pradeep');

    const a = ()=>{
        setNa(na+1)
        
    }
    const b = ()=>{
        setNa(na-1)
    }
    const c =()=>{
        setNa(null-0);
        setNam(0);
    }
    const [na,setNa]=useState(0)
    const e =()=>{
        setNam(rahul+1)
    }
    
    const [rahul,setNam]=useState(0)
    
    return(
        <div className="d-flex justify-content-evenly">
            <div className="text-center" ><button type="button" className="btn btn-primary  m-2" onClick={()=>console.log('hello')}>Click</button>
            <div className="text-center" ><button type="button" className="btn btn-primary  m-2" onClick={k} >Name Change</button> <h1>{name}</h1> </div></div> <hr></hr>
             
           
            <div><h1 className="text-center">{na}</h1>
            <div className="d-flex justify-content-between"> 
            <div><button type="button" className="btn btn-info  m-2" onClick={a}>+</button></div>
            <div><button type="button" className="btn btn-danger  m-2" onClick={c}>RESET</button></div>
            <div><button type="button" className="btn btn-info  m-2" onClick={b}>-</button></div> 
            <div><button type="button" className="btn btn-primary  m-2" onClick={e}>you have clicked {rahul} times</button></div> <br></br>

            <Color></Color>
            </div>
            
            </div>

        </div>
    )
}