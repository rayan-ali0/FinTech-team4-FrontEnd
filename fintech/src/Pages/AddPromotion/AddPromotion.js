import React, { useEffect, useState } from 'react'
import Styles from "./addpromotion.module.css"
import { TextField, Button, Typography } from '@mui/material'
import axios from 'axios'
import Input from '@mui/material/Input'
import  {useUserContext}  from '../../Auth/UserContext';

const AddPromotion = () => {
  const { myUser, signin, signout } = useUserContext();
  const [editPhotoLoading,setEditPhotoLoading]=useState(false)
  const [userProfile, setUserProfile] = useState(myUser)
  const [loading, setLoading] = useState(false)
  const [editLoading, setEditLoading] = useState(false)



  return (

    <>
      {!loading ? (<div className={Styles.bodyy}>
        <div className={Styles.mid}>

          <div className={Styles.pic}>
          </div>
          <div className={Styles.left}>
            <form className={Styles.form} style={{ display: "flex",marginTop:"", flexDirection: "column", color: "white", width: "60%", height: "80%" }}>

         
              <label htmlFor="file-input" style={{ display: "flex",
            justifyContent: "center",
            alignItems:"center",
            flexDirection:"column",margin:"0.6em 0"}}
            >
   
      
      </label>
      {/* </div> */}
            
              <TextField
                placeholder='Coupon code'
                // value={userProfile.username}
                id="sangouf"
                variant='outlined'
                InputProps={{
                  style: { color: 'white' }, 
                }}
                InputLabelProps={{
                  style: { color: 'white' }, 
                }}
                sx={{
                  width: "100%", backgroundColor: "transparent", color: "white", borderRadius: "10px", height: "3rem", marginBottom: "1rem",
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      border: '1px solid grey',
                    },
                  }
                  ,
                  '&:hover': {
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'white',
                      },
                    },
                }

                }}
              >

              </TextField>
              <TextField
                placeholder='percentage'
                // value={userProfile.email}
                // id="Percentage"
                variant='outlined'
                InputProps={{
                  style: { color: 'white' },
                }}
                InputLabelProps={{
                  style: { color: 'white' }, 
                }}
                sx={{
                  width: "100%", backgroundColor: "transparent", color: "white", borderRadius: "10px", height: "3rem", marginBottom: "1rem",

                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      border: '1px solid grey',
                    },
                  }
                  ,
                  '&:hover': {
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'white', 
                      },
                    },
                }
                }}
              ></TextField>

              <TextField
                // type='password'
                placeholder="Expiry date"
                // id="password"
                required
                InputProps={{
                  style: { color: 'white' }, 
                }}
                InputLabelProps={{
                  style: { color: 'white' }, 
                }}
                sx={{
                  width: "100%", backgroundColor: "transparent", color: "white", borderRadius: "10px", height: "3rem", marginBottom: "3rem"
                  ,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      border: '1px solid grey',
                    },
                  }
                  ,
                  '&:hover': {
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'white', 
                      },
                    },
                }
                }}
              ></TextField>
              {!editLoading ? (
                <Button  sx={{
                  color: "white", backgroundColor: "#253B8E", borderRadius: "8px", height: "45px", marginBottom: "1rem", '&:hover': {
                    backgroundColor: "#4566C1",

                  }
                }}>Edit Profile</Button>
              ) : (<Button sx={{
                color: "white", backgroundColor: "transparent", borderRadius: "8px", height: "45px", marginBottom: "1rem", '&:hover': {
                  backgroundColor: "#4566C1",

                }
              }}>loading..</Button>)}



            </form>

          </div>
        </div>

      </div>) : (<div style={{ height: '100%', color: "white", width: '100%', display: "flex", justifyContent: "center", alignItems: "center"}}>
        <h1>
          LOADING..
        </h1></div>)}
    </>


  )
}

export default AddPromotion
