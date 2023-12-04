import React, { useState } from 'react'
import Styles from "./signin.module.css"
import picture from "../../Assets/CWarren_DigitalWallet_1200.jpg"
import TextField from '@mui/material/TextField';
import styled from '@emotion/styled';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import {useUserContext} from '../../Auth/UserContext.js'
import axios from 'axios';
import { loginUser } from '../../Auth/UserService';




const Signin = () => {


  const {user, signin} = useUserContext();
  const [userForm, setUserForm] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const  handleLogin = async (e) => {
    e.preventDefault();
    // const userInfo = { name: 'John Doe', email: 'john@example.com' };
    // const userCookie = document.cookie;

     if(email && password){
      try{
        
        const res = await axios.post(`${process.env.REACT_APP_PATH}/auth/signin`,{ email, password })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error.message);
        });
        
        
        
      } catch {
        console.log ("this shouldnt execute")
      }

     }

    // loginUser(userinfonotpassword)
    // Make a request with Axios


      //  await axios.get('localhost:5000/signin', {
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Authorization': `Bearer ${userCookie}`, 
      //   },
      // })
      //   .then(response => {
      //     console.log(response.data);
      //   })
      //   .catch(error => {
      //     console.error('Error:', error);
      //   });

    // signin(userInfo);
    // console.log(userInfo);
  };




  return (

    
    <div className={Styles.bodyy}>
      <div className={Styles.mid}>
      <div className={Styles.pic}>
          <img src={picture} className={Styles.img}></img>
      </div>
      <div className={Styles.left}>
        <form  noValidate autoComplete='off' onSubmit={(event)=>{handleLogin(event)}}
        className={Styles.form} style={{display:"flex", flexDirection:"column",  color:"white" , width:"60%", height:"80%"}}>
         <Typography variant="h3" sx={{alignSelf:"self-start", marginBottom:"1rem"  }}>
          Welcome Back!
         </Typography>
         <Typography  variant="h4" sx={{alignSelf:"self-start", marginBottom:"3rem" ,color:"white" }}>
          Login
         </Typography>
         
          <Typography  sx={{alignSelf:"self-start", color:"white" }}>
          Email
         </Typography>
           <TextField
           placeholder='Enter Your Email'

           variant='outlined'
           sx={{width:"100%" ,backgroundColor:"#FFF", color:"white", borderRadius:"10px" , height:"3rem",marginBottom:"1rem",'& fieldset':{border:'none'},}}
           onChange={(event)=>{setEmail(event.target.value)}} 
          ></TextField>
            <Typography  sx={{alignSelf:"self-start", color:"white" }}>
          Password
         </Typography>
           <TextField
           type='password'
           placeholder="Username"
          //  variant='outlined'
           sx={{width:"100%" ,backgroundColor:"#FFF", color:"white", borderRadius:"10px",height:"3rem", marginBottom:"3rem",'& fieldset':{border:'none'},}} 
           onChange={(event)=>{setPassword(event.target.value)}} 
          ></TextField>
          <Button type='submit'
          sx={{color:"white", backgroundColor:"#253B8E", borderRadius:"8px", height:"45px", marginBottom:"1rem"}}>Sign in</Button>

          <Typography  sx={{alignSelf:"self-start", color:"#a1a1a1" }}>
          Don't have an account? <Link to="/signup" style={{textDecoration:"none",color:'white' }}>signup</Link>
         </Typography>
        </form>
       
      </div>
      </div>

    </div>
  )
}

export default Signin
