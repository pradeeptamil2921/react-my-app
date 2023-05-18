import axios from "axios";
import { useState } from "react"
import { API1 } from "./api";
export default function Registerform(){
    const [name,setName]=useState('')
    const [name1,setName1]=useState([])
          const [password, setPassword] = useState('');
          const [conform, setConform] = useState('');


        const f = (e)=>{
            e.preventDefault();
            // console.log(name);
            axios.post(API1,{NAME:name,PASSWORD:password,CONFORM:conform});

            setName('')
            setPassword('')
            setConform('')
        }


        axios.get(API1).then((t)=>{
            console.log(t.data);
            setName1(t.data)
        })

    return(
        <div>


<div className="d-flex justify-content-center">
    
 <div className="d-flex justify-content-center">
<form onSubmit={f} className="p-5 bg-danger w-100 justify-content-center">
                <h1 className="container text-center bg-dark text-danger rounded-pill">Signup</h1>
                <input type="text" id="Enter Your Name" placeholder="Enter Your Name" required value={name} onChange={(a)=>setName(a.target.value)}></input>
                <br></br> <br></br>
                <input type="password" id="Enter Your Password" placeholder="Create New Password" required value={password} onChange={(a)=>setPassword(a.target.value)}></input>
                <br></br> <br></br>
                <input type="password" id="Enter your Password" placeholder="Conform Password" required value={conform} onChange={(a)=>setConform(a.target.value)}></input>
                <br></br> <br></br>
                <button type="submit" >LOGIN</button>


            </form>
</div> 



{name1.map((t)=>(
    <table>
        <tr>
            <td><h1>{t.NAME}</h1></td><td><button>delete</button></td>
        </tr>
    </table>
))}

</div>

        </div>
    )
}