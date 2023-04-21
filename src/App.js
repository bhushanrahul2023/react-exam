import User from "./components/user";
import{Routes,Route} from "react-router-dom";
import Userdetails from "./components/userdetails";
import Logindetails from "./components/logindetails";
import End from "./components/end";
import {useState} from "react";
function App() {
  const [firstname, setFirstname] = useState('');
  const [middlename, setMiddlename]= useState('');
  const [lastname, setLastname]=useState('');


  return (
    <Routes>
      <Route path="/" element={<User firstname={firstname} setFirstname={setFirstname}  middlename={middlename} setMiddlename={setMiddlename}
      lastname={lastname} setLastname={setLastname} />}
      />
      <Route path="/userdetails" element={<Userdetails />} />
      <Route path="/logindetails" element={<Logindetails />} />
      <Route path="/end" element={<End firstname={firstname}  middlename={middlename} lastname={lastname}/>} />
    </Routes>

  );
}

export default App;
