import "../styles/user.scss"
import { useNavigate } from "react-router-dom"
import { useState } from "react";

export default function User({firstname,setFirstname,middlename,setMiddlename,lastname,setLastname, phone,setphone}){
    const Navigate=useNavigate();
    
    const handleChangeFirstName =(e)=>{
        setFirstname(e.target.value)
    }

    const handlechangeMiddleName =(e)=>{
        setMiddlename(e.target.value)
    }
    const handlechangeLastName =(e)=>{
        setLastname(e.target.value)
    }
   
  
    return(

        <div className="user">
            <div className="u1"> 
            <p>welcome to homepage</p>

               <div>
                <input placeholder="firstname.."value={firstname} onChange={handleChangeFirstName} ></input>
                 <span> FIRST NAME</span>
                 </div> 
                <div>
                    <input placeholder="middlesname..." value={middlename} onChange={handlechangeMiddleName} ></input> 
                    <span>SECOND NAME</span></div> 

               <div><input placeholder="lastname..."value={lastname} onChange={handlechangeLastName}  ></input> 
               <span> LAST NAME</span>
               </div> 
              
                <div>
                    <button onClick={()=>Navigate("/userdetails")}>next</button>
                </div>
            </div>

        </div>
    )
}