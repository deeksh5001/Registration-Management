import './Login.css'
import React, { useRef, useState } from 'react'
import { Button} from '@material-ui/core';
import SubLogin from './SubLogin';
import SignUp from './SignUp';


const Login = () => {

    const [login,setLogin]=useState(true);
    const loginContainerRef = useRef(null);

    const handleClick=()=>
    {   
        setLogin(!login);
        loginContainerRef.current.classList.toggle("active");
    };

  return (

    <div className='body1'>
    <div className='login-container' ref={loginContainerRef}>
        <SubLogin/>

       <div className='side-div'>

        <p style={{color:"white"}}>{login?"Don't have an account?":"Already have an account?"}</p>
        
        <br/>
        <Button onClick={handleClick}  variant="contained" style={{backgroundColor:"white"}}>
        {" "}
        {login?"Sign Up":"Log in"}
        </Button>
      </div>
        <SignUp/>
    </div>
    </div>
    
  )
}

export default Login
