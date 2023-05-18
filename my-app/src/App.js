import Button from "./Button";
import Form from "./Form";
import Name from "./Name";
import Registerform from "./Registerform";
import Ret from "./Ret";
import Click from "./click";
import Calculator from "./task/Calculator";
import Changeimg from "./task/Changeimg";
import Image from "./task/image";
import GContact from "./GContact";


 
 export default function App(){
  return(
<div className="container-fluid">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
        
<div className="container-fluid">
    <div className="d-flex justify-content-between">

    
<> <Name></Name></>
 
 
   <><Button></Button></>

</div>
<Ret></Ret>

  </div>
  <div className="d-flex justify-content-around">

<div><Click></Click></div>

  </div>
  <Image></Image>
  <Changeimg></Changeimg>
<br></br>
  <div>
<h1 className="container text-center bg-info">CALCULATOR</h1>
    <div><Calculator></Calculator></div>
  </div>
<br></br>
<div><Form></Form></div> 
<div><Registerform></Registerform></div>  
{/* <BrowserRouter>
<Routes>


  <Route  path="/rr"  element={<Calculator></Calculator>}  exact={true}  />
  
</Routes>
</BrowserRouter> */}
{/* <GContact></GContact> */}
</div>
  )
 }