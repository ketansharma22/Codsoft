import React, { useState } from "react";
import "../styling/Contactme.css";
import Alert from '@mui/material/Alert'

function Contactme() {
  const [error, setError] = useState("");
  const [email,setEmail] = useState("")
  const [name,setName]=useState("")
  const [message,setMessage]=useState("")

  const[user,setUser]=useState({
    mail:"",
    name:"",
    messagee:"",
  })

  const handleChange=  (e)=>{
      const {name ,value} =e.target
      setUser((prevUser)=>({...prevUser,[name]:value}))
  }

  const handleSubmit= async (e)=>{
    e.preventDefault()
    setError("We'll Catch up soon")

  }

  return (
    <div id="contactme">
      <div id="login-box">
        <form onSubmit={handleSubmit}>
          <div id="user-box"> 
            <input id="input" type="text" name="mail" required value={user.mail} onChange={handleChange} />
            <label>E-mail</label>
          </div>
          <div id="user-box">
            <input id="input" type="text" name="name" required value={user.name}  onChange={handleChange} />
            <label>Name</label>
          </div>
          <div id="user-box">
            <input  id="input" type="text" name="messagee" required="false" value={user.messagee} onChange={handleChange}  />
            <label>Anything ?</label>
          </div>
          {error && <Alert severity="success">{error}</Alert>}
          <center>
            <button id="oye" type="submit">
              Let's Talk
            </button>
          </center>
        </form>
      </div>
      
    </div>
  );
}

export default Contactme;
