import axios from "axios";
import { useEffect, useState } from "react"
import {API} from "./api";

    export default function Form(){
        const [name,setName]=useState('')
          const [password, setPassword] = useState('');

        const h = (e)=>{
            e.preventDefault();
            // console.log(name);
            axios.post(API,{NAME:name,PASSWORD:password});

            setName('')
            setPassword('')
        }
        const [names,setName1]=useState([])
       useEffect(()=>{ axios.get(API).then((t)=>{
        console.log(t.data);
        setName1(t.data)
    })},[])
        

        
    return(
        <div>
            <div className="container ">
                <h1 className="container text-center bg-dark text-danger">LOGIN FORM</h1>
            </div>
            <div className=" d-flex justify-content-center">
            <div>
            <img src={'https://cdn.dribbble.com/users/2234430/screenshots/8587843/gif.gif'} alt="ssss" width={400} height={398}></img>
            </div>
            <div>
            <form onSubmit={h} className="p-5 bg-info w-100">
                <h1 className="text-center">Login</h1>
                <input type="text" id="Enter your name" placeholder="Enter Your Name" className="text-center p-2 rounded-pill"  required value={name} onChange={(e)=>setName(e.target.value)}/>
                
                <br></br> <br></br>

                <input type="password" id="Enter your age" placeholder="Enter Your Password" className="text-center p-2 rounded-pill" required value={password} onChange={(e)=>setPassword(e.target.value)}/>

                <br></br>
                <br></br>
                <div className="text-center"><button type="submit" >submit</button></div>
                <br></br>
                <div className=""><button >Signup</button></div>
            </form>
           
            
            </div>
            </div>
            <br></br>
            {/* <form className="container ">
                <h1 >Signup</h1>
                <div><input type="text" id="Enter Your Name" placeholder="Enter Your Name" required></input></div>
                <br></br>
                <div><input type="password" id="Enter Your Password" placeholder="Create New Password"></input></div>
                <br></br>
                <input type="password" id="Enter your Password" placeholder="Conform Password"></input>
                <br></br> <br></br>
                <div><button type="submit" >Submit</button></div>


            </form> */}

<table>
{names.map((t)=>(
  
        <tr>
            <td><h1>{t.NAME}</h1></td><td>
                <button onClick={()=> console.log(t.id)}>delete</button></td>
        </tr>
   
))}
 </table>
        </div>
    )
}