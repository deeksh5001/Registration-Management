import {React,useState} from 'react'
import './Login.css';
import { TextField,Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
const SignUp = () => {

  const[username,setUsername]=useState('')
  const[password,setPassword]=useState('')

  const handleClick=(e)=>{
    
    const user={username,password}
    console.log(user)
    fetch("http://localhost:8080/saveUser",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(user)
    }).then(()=>{
      console.log("User has been saved")
      /*alert("Registered successfully")*/
    })
  }

  return (
    
    <div className='container1'>
      <h2>Sign Up</h2>
      <br/>
      <p style={{fontSize:"17px"}}>Please sign up to create your account.</p>
      <br/>
      <TextField label="Username" variant='outlined' style={{width:"60%"}} value={username} onChange={(e)=>setUsername(e.target.value)}/>
      <br/>
      <TextField label="Password"variant='outlined' style={{width:"60%"}} value={password} type='password' onChange={(e)=>setPassword(e.target.value)}/>
      <br/>
      <Link to='/home'>
      <Button style={{backgroundColor:"black",color:"white"}} onClick={handleClick}>Sign Up</Button>
      </Link>
      <br/>
    </div>
  )
}

export default SignUp
