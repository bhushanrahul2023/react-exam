import React from "react";
import "../styles/end.scss"
import { useNavigate } from "react-router-dom"
const End = (props) => {
  const Navigate=useNavigate();
    
  const { firstname,middlename,lastname,phone} = props;
  return (
    <div className="end1">
      <h2>User Details</h2>
      <div><input value={firstname} name='firstname' readOnly></input> <span></span> <span>firstname</span>
        </div>
        <div>
        <input value={middlename} name='middlename' readOnly></input><span>middlename</span>
        </div>

        <div>
        <input value={lastname} name='lastname' readOnly></input><span>lastname</span>
        </div>
            
        <div>
          <button onClick={()=>Navigate("/")}>firstpage</button>
        </div>
      
    </div>
  );
};

export default End;
