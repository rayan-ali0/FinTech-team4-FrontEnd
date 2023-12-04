import React from 'react'
import {useNavigate} from 'react-router-dom'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function NotAuthorized() {
    const navigate=useNavigate()
    const getBack=()=>{
navigate('/')
    }
  return (

          <div style={{ width: "100vw", height: "98vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <h1 style={{color: "white", fontSize: "4em",width:"50%",textAlign:"center"}}>You Are Not Authorized To Access This Page</h1>
            <span style={{ color: "red", fontSize: "2.3em" ,cursor:"pointer",}} onClick={()=>{getBack()}}><ArrowBackIosNewIcon sx={{color:"red"}}/><ArrowBackIosNewIcon sx={{color:"red"}}/> Back</span>
        </div>
  )
}
