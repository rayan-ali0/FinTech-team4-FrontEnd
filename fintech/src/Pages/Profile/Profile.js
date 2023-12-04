import React from 'react'
import Styles from "./profile.module.css"
import Pic from "../../Assets/profile_user.jpg"
import background from "../../Assets/159044-ipad-apple-ipad_air-ipad_air_4_2020-apples-3840x2160 1.png"
import { TextField , Button, Typography} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const Profile = () => {
  return (


    <div className={Styles.bodyy}>
    <div className={Styles.mid}>
      
    <div className={Styles.pic}>
        {/* <img src={background} className={Styles.img}></img> */}
    </div>
    <div className={Styles.left}>
      <form  className={Styles.form} style={{display:"flex", flexDirection:"column",  color:"white" , width:"60%", height:"80%"}}>
      <ArrowBackIcon sx={{color:"#253B8E", cursor:"pointer"}}></ArrowBackIcon>
     
       <Typography  variant="h4" sx={{alignSelf:"center" ,color:"white" }}>
        <img src={Pic} className={Styles.image}></img>
       </Typography>
       <Button sx={{color:"white",alignSelf:"center", backgroundColor:"transparent", borderRadius:"8px", height:"25px",width:"15rem", marginBottom:"1rem",  '&:hover': {
      backgroundColor: "#4566C1",color:"white"}}}>update photo</Button>
         <TextField
         placeholder='Username'

         variant='outlined'
         sx={{width:"100%" ,backgroundColor:"white", color:"white", borderRadius:"10px" , height:"3rem",marginBottom:"1rem",}} 
        ></TextField>
           <TextField
         placeholder='Email'

         variant='outlined'
         sx={{width:"100%" ,backgroundColor:"white", color:"white", borderRadius:"10px" , height:"3rem",marginBottom:"1rem",}} 
        ></TextField>
       
         <TextField
         type='password'
         placeholder="Password"
        //  variant='outlined'
         sx={{width:"100%" ,backgroundColor:"white", color:"white", borderRadius:"10px",height:"3rem", marginBottom:"3rem"}} 
        ></TextField>
        <Button sx={{color:"white", backgroundColor:"#253B8E", borderRadius:"8px", height:"45px", marginBottom:"1rem",  '&:hover': {
      backgroundColor: "#4566C1",}}}>submit</Button>

       
      </form>
     
    </div>
    </div>

  </div>

  )
}

export default Profile
