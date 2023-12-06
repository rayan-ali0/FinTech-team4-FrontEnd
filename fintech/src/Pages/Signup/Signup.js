import React, { useState } from 'react'
import Styles from "./signup.module.css"
import picture from "../../Assets/CWarren_DigitalWallet_1200.jpg"
import TextField from '@mui/material/TextField';
import styled from '@emotion/styled';
import { Button, Radio, RadioGroup, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import FormControlLabel from '@mui/material/FormControlLabel';


const Signup = () => {
  const [signUpForm, setSignUpForm] = useState({
    name : "",
    email : "",
    password : "",
    role : "",
  });

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitHandler = async (event)=> {
    event.preventDefault();
    setError(false);
    console.log("sign up form info on submit: ",signUpForm);
    if(!signUpForm.name || !signUpForm.email || !signUpForm.password || !signUpForm.role){
      setError(true);
      console.log("check credentials")
      return;
    } 
    if(signUpForm.role !== "user" && signUpForm.role !== "merchant"){
      setError(true);
      console.log("check role")

      return;
    }

    try{
      setLoading(true);
      const res = await axios.post(`${process.env.REACT_APP_PATH}/auth/signup`, signUpForm)
    } 
    catch (err){
      console.log(err);
    } 
    finally{
      setLoading(false);
    }

    console.log(signUpForm);
  }


  return (

    
    <div className={Styles.bodyy}>
      <div className={Styles.mid}>
      <div className={Styles.pic}>
          <img src={picture} className={Styles.img}></img>
      </div>
      <div className={Styles.left}>
        <form  noValidate onSubmit={(event)=>submitHandler(event)}
        className={Styles.form} style={{display:"flex", flexDirection:"column",  color:"white" , width:"60%", height:"80%"}}>
         <Typography variant="h3" sx={{alignSelf:"self-start", marginBottom:"3rem"  }}>
          Get Started
         </Typography>
         
         
         <Typography  sx={{alignSelf:"self-start", color:"white"  }}>
          Full Name
         </Typography>
         
          <TextField
           placeholder="Enter your name"
           variant='outlined'
           onChange={(event)=> setSignUpForm({...signUpForm, name: event.target.value })}

           sx={{width:"100%" ,WebkitBoxShadow:"none", backgroundColor:"#FFF", color:"white", borderRadius:"10px", marginBottom:"1rem", height:"3rem", '& fieldset':{border:'none'},border:"none"}} 
          >
            
          </TextField>
          <Typography  sx={{alignSelf:"self-start", color:"white" }}>
          Email
         </Typography>
           <TextField
           placeholder='Enter Your Email'
           type='email'
           onChange={(event)=> setSignUpForm({...signUpForm, email: event.target.value })}
           variant='outlined'
           sx={{width:"100%" ,backgroundColor:"#FFF", color:"white", borderRadius:"10px" ,marginBottom:"1rem",height:"3rem", '& fieldset':{border:'none'},}} 
          ></TextField>
            <Typography  sx={{alignSelf:"self-start", color:"white" }}>
          Password
         </Typography>
           <TextField
           type='password'
           placeholder="Username"
           onChange={(event)=> setSignUpForm({...signUpForm, password: event.target.value })}
           sx={{width:"100%" ,backgroundColor:"#FFF", color:"white", borderRadius:"10px", marginBottom:"2rem", height:"3rem",'& fieldset':{border:'none'},}} 
          ></TextField>

          <RadioGroup name="uradioGroup" defaultValue="first" style={{display: "flex", flexDirection: "row", marginBottom:'1rem', justifyContent:'space-between'}}>
            <FormControlLabel value="user" label="User" control={<Radio />} 
            onClick={(event)=>setSignUpForm({...signUpForm, role: event.target.value})}
            />
            <FormControlLabel value="merchant" label="Merchant" control={<Radio />} 
              onClick={(event)=>setSignUpForm({...signUpForm, role: event.target.value})}
            />
          </RadioGroup>

          <Button type='submit' disabled={loading}
          sx={{color:"white", backgroundColor:"#253B8E", borderRadius:"8px", height:"45px", marginBottom:"1rem"}}>{loading ? "Loading": "Sign up"}</Button>

          <Typography  sx={{alignSelf:"self-start", color:"#a1a1a1" }}>
          Already have an account? <Link to="/signin" style={{textDecoration:"none",color:'white' }}>Sign in</Link>
         </Typography>
        </form>
       
      </div>
      </div>
      {/* <div className={Styles.pic}>
          <img src={picture} className={Styles.img}></img>
      </div>
      <div className={Styles.left}>
        <form noValidate autoComplete='off' style={{display:"flex", flexDirection:"column", justifyContent:"center", color:"white"}}>
          <TextField
           label="Username"
      
           variant='outlined'
           sx={{width:"80%" ,backgroundColor:"#FFF", color:"white"}} 
          ></TextField>
        </form>
       
      </div>
      <div className={Styles.right}>
        

      </div> */}
    </div>
  )
}

export default Signup
