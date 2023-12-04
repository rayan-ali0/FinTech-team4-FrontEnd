import React from 'react'
import Styles from "./signup.module.css"
import picture from "../../Assets/CWarren_DigitalWallet_1200.jpg"
import TextField from '@mui/material/TextField';
import styled from '@emotion/styled';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


const Signup = () => {
  return (

    
    <div className={Styles.bodyy}>
      <div className={Styles.mid}>
      <div className={Styles.pic}>
          <img src={picture} className={Styles.img}></img>
      </div>
      <div className={Styles.left}>
        <form  className={Styles.form} style={{display:"flex", flexDirection:"column",  color:"white" , width:"60%", height:"80%"}}>
         <Typography variant="h3" sx={{alignSelf:"self-start", marginBottom:"3rem"  }}>
          Get Started
         </Typography>
         
         
         <Typography  sx={{alignSelf:"self-start", color:"white"  }}>
          Username
         </Typography>
         
          <TextField
           placeholder="Enter username"
           variant='outlined'
          //  size='small'

           sx={{width:"100%" ,WebkitBoxShadow:"none", backgroundColor:"#FFF", color:"white", borderRadius:"10px", marginBottom:"1rem", height:"3rem", '& fieldset':{border:'none'},border:"none"}} 
          >
            
          </TextField>
          <Typography  sx={{alignSelf:"self-start", color:"white" }}>
          Email
         </Typography>
           <TextField
           placeholder='Enter Your Email'

           variant='outlined'
           sx={{width:"100%" ,backgroundColor:"#FFF", color:"white", borderRadius:"10px" ,marginBottom:"1rem",height:"3rem", '& fieldset':{border:'none'},}} 
          ></TextField>
            <Typography  sx={{alignSelf:"self-start", color:"white" }}>
          Password
         </Typography>
           <TextField
           type='password'
           placeholder="Username"
          //  variant='outlined'
           sx={{width:"100%" ,backgroundColor:"#FFF", color:"white", borderRadius:"10px", marginBottom:"3rem", height:"3rem",'& fieldset':{border:'none'},}} 
          ></TextField>
          <Button sx={{color:"white", backgroundColor:"#253B8E", borderRadius:"8px", height:"45px", marginBottom:"1rem"}}>Sign up</Button>

          <Typography  sx={{alignSelf:"self-start", color:"#a1a1a1" }}>
          Already have an account? <Link to="/signin" style={{textDecoration:"none",color:'white' }}>login</Link>
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
