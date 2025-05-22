import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
function LoginSign() {
  let navigate = useNavigate()
  const [login,setLogin]=useState(true);
  function registerpage(){
    setLogin(false);
  }
  function registerdatas(){
    let email = document.getElementById("email").value 
    let pass = document.getElementById("pass").value
    let repass = document.getElementById("repass").value
    if(email==="" && pass==="" && repass===""){
        alert("Typee")
    }
    else if(pass==repass){
      localStorage.setItem("email",email)
      localStorage.setItem("pass",pass)
      setLogin(true)
      
    }
    
    else{
      alert("Mismatched passwords")
    }
       
   
  }
  function logincheck(){
     let loginemail = document.getElementById("loginemail").value
     let loginpass = document.getElementById("loginpass").value
     let registeremail = localStorage.getItem("email")
     let registerpass = localStorage.getItem("pass")
     if(registeremail==loginemail && registerpass==loginpass){
        navigate("/")
     }
     else{
     alert("Errorr")
     }
     
     

  }
  if(login){
  return (
    <div>
        <form action="" className='loginform'>
        <h2>Log in</h2>
        <input type="email" placeholder='Email' id='loginemail' required/> 
        <input type="password" placeholder='Password'  id='loginpass'required/>
        <button type='button' onClick={logincheck}>Log in</button>
        <Link><p>Forget password?</p></Link>
        <p>New to our store?</p>
        <button onClick={registerpage}>Register now</button>
     </form>
    </div>
  )}
  else{
    return(
      <div>
      <form action="" className='loginform'>
        <h2>Sign up</h2>
          <input type="email" placeholder='Email' id='email' required/>
          <input type="password" placeholder='Create password' id='pass' required/>
          <input type="password" placeholder='Re-Enter password' id='repass' required/>
          <button type='button' onClick={registerdatas}>Register</button>
       </form>
  </div>
    )
  }
}
export default LoginSign