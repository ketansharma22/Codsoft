import React, { useState } from "react";
import "../styling/Contactme.css";
import Alert from '@mui/material/Alert'
import linked from '../styling/linkedin.png'
import git from '../styling/githublast.png'
import insta from '../styling/instatransparent.png'
import { Link } from "react-scroll";
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
    setUser({
      mail:"",
      name:"",
      messagee:"",
    })
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
       <div id="navigation">
        <a  id="anchor" href="https://www.linkedin.com/in/ketansharma22/"><img  src={linked} /></a>
        <a id='anchor' href="https://github.com/ketansharma22"><img src={git} /></a>
        <a id="anchor" href="https://www.instagram.com/ketan_bakshi__/"><img src={insta} /></a>

        <Link to="profile" style={{cursor:"pointer"}} offset={-20} duration={1000} spy={true} smooth={true}><button id="top">  ^ </button></Link>
       </div>
    </div>
  );
}

export default Contactme;
