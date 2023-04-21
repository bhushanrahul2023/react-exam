import "../styles/us1.scss"
import { useNavigate } from "react-router-dom"


export default  function Userdetails(){
    const Navigate= useNavigate();
    
    return(
        <div className="us1">
            <div className="one">
            <h1>Hello Again need more details</h1>
            <div>
                <label>gender</label> 
                <input type="radio" name="gender" value="male"></input> male
                <input type="radio" name="gender" value="female" ></input>female
                
            </div>

            <div >
                <label>house address</label>
                <textarea></textarea>

            </div>
            <div>
                <button onClick={()=>Navigate("/logindetails")}>next</button>
            </div>
            
         </div>

            

        </div>
    )
}