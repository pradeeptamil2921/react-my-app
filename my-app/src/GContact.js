import "./GContact.css";
export default function(){


    return(
        <div>
            <div className="container contact d-flex justify-content-evenly">
                <div><h1>Contacts</h1></div>
                <div>
                <div>
                <input type="text" id="Enter your name" placeholder="Enter Your First Name" className="text-center p-2 "  required />
                </div> <br></br>
                <div>
                <input type="text" id="Enter your name" placeholder="Enter Your Last Name" className="text-center p-2 "  required />
                </div>
                </div>
                
            </div>
            



        </div>
    )
}