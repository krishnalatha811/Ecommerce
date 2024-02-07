import React from 'react'
import HttpsIcon from '@mui/icons-material/Https';
import './Signup.css'
const Signup = () => {
  return (
    <div className='signup'>
      <form>
      <div className='iconcolor'><HttpsIcon /></div><br></br>
    <div className="signupname" id="signupname"> 
    <h3> Sign up</h3>
    </div>
    <label for="fname">FirstName</label>
    <input type="fname" placeholder="your first name" id="fname" name="fname"/><br></br>
    <label for="lname">LastName</label>
    <input type="lname" placeholder="your last name" id="lname" name="lname"/><br></br>
    <label for="email">EmailAddress</label>
    <input type="email" placeholder="your email id" id="email" name="email"/><br></br>
    <label for="password">Password</label>
    <input type="password" placeholder="your password" id="password" name="password"/><br></br>
    <label for="ConfirmPassword">Password</label>
    <input type="cpassword" placeholder="your password" id="cpassword" name="cpassword"/><br></br>
    <label for="CNumber">ContactNumber</label>
    <input type="CNumber" placeholder="your number" id="CNumber" name="CNumber"/><br></br>
    <button > SignUp</button>
        </form> 
    </div>
  )
}

export default Signup
