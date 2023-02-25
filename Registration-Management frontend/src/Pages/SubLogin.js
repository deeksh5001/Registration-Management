import { Button, TextField } from '@material-ui/core'

import './Login.css'
import { Link } from 'react-router-dom'

const SubLogin = () => {
 
  return (
    
    <div className='container1'>
      <h2>Welcome back!</h2>
      <br/>
      <p style={{fontSize:"17px"}}>Please login to your account to continue.</p>
      <br/>
      <TextField label="Username" variant='outlined' style={{width:"60%"}} />
      <br/>
      <TextField label="Password"variant='outlined' style={{width:"60%"}} type='password'/>
      <br/>
      <Link to='/home'>
      <Button style={{backgroundColor:"black",color:"white"}}>Log in</Button>
      </Link>
      <br/>
    </div>
  )
}

export default SubLogin
