import "../styles/lg.scss"
import { useNavigate } from "react-router-dom"

export default function Logindetails(){
    const Navigate=useNavigate();
    return(
        <div className="lg">
            <div className="lg1">
            <h1>Promise this is the last one please be patient</h1>
            <div>
                <input placeholder="email" type="email"></input> <label>please input your email</label>
            </div>
            <div>
                <input placeholder="password" type="password"></input><label>please input your password</label>
            </div>
            <div>
                <button onClick={()=>Navigate("/end")} > FINISH</button>
            </div>
            </div>
            
        </div>
    )
}