import { useState } from "react";

function Changeimg (){
    const[imageVisible, setImageVisible ]= useState(false);
    const handleClick =() =>{
        setImageVisible(true);
    };
    const[imageVisibl, setImageVisibl] =useState(false)
    const handle =() =>{
        setImageVisibl(true);
    };
    return(
        <div className="container d-flex justify-content-between">
            <div>
            <button onClick={handleClick}>Show Mobile Image</button>
            {imageVisible && (
                <img src="https://www.itcilo.org/sites/default/files/courses/cover-images/AdobeStock_352717716.jpeg" width={350} height={350} ></img>
            )}
        </div>
        <div>
            <button onClick={handle }>Show TV Image</button>
            {imageVisibl && (
                <img src="https://5.imimg.com/data5/SELLER/Default/2020/9/GR/LY/ZJ/69654469/lh-43qm2kd-panasonic-4k-uhd-high-brightness-qm-series-43-inch-smart-android-led-tv-price-500x500.jpg" width={550} height={350}></img>
            )}
        </div>
        </div>
    );

}

export default Changeimg;