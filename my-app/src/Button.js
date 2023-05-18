// import { useNavigate } from "react-router-dom";
export default function Button(){
    // const navi = useNavigate();

    // const y =()=>{
    //     navi('/Form')
    // }
    return(
        <div className="d-flex justify-content-around">
            <div><button type="button" className="btn btn-dark  m-2"  >Break</button></div>
        <div><button type="button" className="btn btn-info  m-2">Blog</button></div>
        
        </div>

    )
}