import React,{useState} from 'react'
import './Registration.css';
import { TextField ,MenuItem ,Button} from '@material-ui/core';


const ages = [
  
  {
    label: 'First Year',
    value: 'First Year',
  },
  {
    label: 'Second Year',
    value: 'Second Year',
  },
  {
    label: 'Third Year',
    value: 'Third Year',
  },
  {
    label: 'Fourth Year',
    value: 'Fourth Year',
  }
];
const type = [
  {
    label: 'Hackathon',
    value: 'Hackathon',
  },
  {
    label: 'Paper Presentation',
    value: 'Paper Presentation',
  },
  {
    label: 'Seminar',
    value: 'Seminar',
  },
  {
    label: 'Workshop',
    value: 'Workshop',
  }
];

const Registration = () => {
  const [name,setName]=useState('')
  const [age,setAge]=useState('')
  const [dept,setDept]=useState('')
  const [yearOfStudy,setYearOfStudy]=useState('')
  const [college,setCollege]=useState('')
  const [email,setEmail]=useState('')
  const [typeOfEvent,setTypeOfEvent]=useState('')

  const handleClick=(e)=>{
    e.preventDefault()
    const participant={name,age,dept,yearOfStudy,college,email,typeOfEvent}
    console.log(participant)
    fetch("http://localhost:8080/save",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(participant)
    }).then(()=>{
      console.log("Your record has been saved")
      alert("Registered successfully")
    })
  }
 
  
  return (
    
    <div className='body2' >
    <div className='title'><h2><i>Register here!&nbsp;</i></h2></div>

    <div className='container'>
        <br/>
        <div className='x'>
        <p>Name</p>
        <TextField label="Enter your name" variant="outlined" style={{width:"62%"}}
        value={name}
        onChange={(e)=>setName(e.target.value)}/>
        </div>
        
        <div className='x'>
        <p>Age</p>
        <TextField label="Enter your age" variant="outlined" style={{width:"62%"}}
        value={age}
        onChange={(e)=>setAge(e.target.value)}/>
        </div>

        <div className='x'>
        <p>College Name</p>
        <TextField label="Enter your college name" variant="outlined" style={{width:"62%"}}
        value={college}
        onChange={(e)=>setCollege(e.target.value)}/>
        </div>
        
        <div className='x'>
        <p>Department</p>
        <TextField label="Enter your department" variant="outlined" style={{width:"62%"}}
        value={dept}
        onChange={(e)=>setDept(e.target.value)}/>
        </div>
        
        <div className='x'>
        <p>Year Of Study</p>
        <TextField select
          label="Select your year of study"
          variant='outlined'
          defaultValue="Select"
          style={{width:"62%"}}
          value={yearOfStudy}
          onChange={(e)=>setYearOfStudy(e.target.value)}>
          {
            ages.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))
          }
          
        </TextField>
        </div>
        
        <div className='x'>
        <p>Type of Event</p>
        <TextField select
          label="Choose the type of event"
          variant='outlined'
          defaultValue="Select"
          style={{width:"62%"}}
          value={typeOfEvent}
          onChange={(e)=>setTypeOfEvent(e.target.value)}>
          {
            type.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))
          }
        </TextField>
        </div>

        <div className='x'>
        <p>Email</p>
        <TextField label="Enter your email" variant="outlined" style={{width:"62%"}}
        value={email}
        onChange={(e)=>setEmail(e.target.value)}/>
        <br/>
        <br/>
        </div>

        <div className='button'>
        <Button style={{backgroundColor:"black",color:"white",width:"15%"}} onClick={handleClick}>REGISTER</Button>
        </div>
        <br/>
        </div>
    
    </div>

  )
}

export default Registration

