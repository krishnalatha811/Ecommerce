import React from 'react'
import {Link} from 'react-router-dom'
import HttpsIcon from '@mui/icons-material/Https';
import './Login.css'




const Login = () => {
  return (

    <div className="signin-icon">
          
 <form>
 
    <div className="icon" ><HttpsIcon /></div><br></br>
    <div className="signinname" id="signin"> 
   <h3> Sign in</h3>
    </div>
    <label for="email">EmailAddress</label>
    <input type="email" placeholder="your email id" id="email" name="email"/><br></br>
    <label for="password">Password</label>
    <input type="password" placeholder="your password" id="password" name="password"/><br></br>
    <div className="but">
    <button > Signin</button>
    </div>
    </form>
 </div>

 
  )
}

export default Login
