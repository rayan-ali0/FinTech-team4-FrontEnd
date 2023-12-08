import React, { useEffect, useState } from 'react'
import Styles from "./profile.module.css"
import Pic from "../../Assets/profile_user.jpg"
import background from "../../Assets/159044-ipad-apple-ipad_air-ipad_air_4_2020-apples-3840x2160 1.png"
import { TextField, Button, Typography } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios'
import Input from '@mui/material/Input'

const Profile = () => {
  const [editPhotoLoading,setEditPhotoLoading]=useState(false)
  const [userProfile, setUserProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [formData, setFormData] = useState(null)
  const [editLoading, setEditLoading] = useState(false)
  const fetchProfile = async () => {
    await axios.get(`${process.env.REACT_APP_PATH}/user/read/18`)
      .then((res) => {
        setUserProfile(res.data);
        console.log("fetchinggg")
        console.log(res.data)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching Profile:", error);
      });
  }

  useEffect(() => {
    fetchProfile()
    // console.log(`${process.env.REACT_APP_PATH}/${userProfile.pic}`)
  }
    , []
  )
  const updateProfile = async () => {
    console.log("updatingg...")
    setEditLoading(true)
    const username = document.querySelector('#username').value.trim()
    const email = document.querySelector('#email').value.trim()
    const password = document.querySelector('#password').value.trim()
    const name = document.querySelector('#name').value.trim()

    console.log(name)
    console.log(username)
    console.log(email)
    console.log(password === '')

    const requestedData = {
      username: username,
      email: email,
      name: name
    }

    if (password !== '') {
      requestedData.password = password
    }
    
    console.log(requestedData)

    try {
      const res = await axios.put(`${process.env.REACT_APP_PATH}/user/update/18`, requestedData)
      if (res) {
        console.log('profile updated!!')
        fetchProfile()
      }

    } catch (error) {
      console.error("Error updating Profile:", error);
    }
    finally {
      setEditLoading(false)

    }


    // await axios.put(`${process.env.REACT_APP_PATH}/user/update/18`, requestedData)
    //   .then((res) => {
    //     console.log('profile updated!!')
    //     fetchProfile()
    //     setEditLoading(false)
    //   })
    //   .catch((error) => {
    //     setEditLoading(false)
    //     console.error("Error updating Profile:", error);
    //   });


  }
  const handleFileChange=(event)=>{
    const file=event.target.files[0]
    if(file){
      UpdateImage(file)

    }
  }
  const UpdateImage=async(file)=>{
    setEditPhotoLoading(true)
try{
const formData=new FormData()
formData.append('profile',file)

const res=await axios.patch(`${process.env.REACT_APP_PATH}/user/update/pic/18`,formData,{
  headers:{
    'Content-Type':'multipart/form-data'
  }
})
if(res){
  console.log("image updated successfully")
}
fetchProfile()
setEditPhotoLoading(false)

}

catch(error){
console.log('Error updating',error)
setEditPhotoLoading(false)

}
  }

  return (

    <>
      {!loading ? (<div className={Styles.bodyy}>
        <div className={Styles.mid}>

          <div className={Styles.pic}>
            {/* <img src={background} className={Styles.img}></img> */}
          </div>
          <div className={Styles.left}>
            <form className={Styles.form} style={{ display: "flex",marginTop:"", flexDirection: "column", color: "white", width: "60%", height: "80%" }}>
              {/* <ArrowBackIcon sx={{ color: "#253B8E", cursor: "pointer" }}></ArrowBackIcon> */}

              <Typography variant="h4" sx={{ alignSelf: "center", color: "white",width:"200px",height:"200px"}}>     
                       <img src={`${process.env.REACT_APP_PATH}/${userProfile.pic}`} className={Styles.image} alt="user profile"></img>
              </Typography>
              <label htmlFor="file-input" style={{ display: "flex",
            justifyContent: "center",
            alignItems:"center",
            flexDirection:"column",margin:"0.6em 0"}}
            >
        <Input
          type="file"
          inputProps={{ accept: 'image/*' }}
          onChange={handleFileChange}
          sx={{
            display: 'none',
            width:"50%" ,
            alignSelf: "center",

            border:"1px solid white",// hide the default file input
          }}
          id="file-input"
        />
        <Button
          component="span"
          sx={{
            color: "white",
            alignSelf: "center",
            backgroundColor: "transparent",
            borderRadius: "8px",
            height: "35px",
            width: "50%",
            // border:"1px solid white",
            // margin:" 1rem 0",
            // marginBottom: "1rem",
            // display: "flex",border:"1px solid white",
            // justifyContent: "center",
            // alignItems:"center",
            // flexDirection:"column",
            float:"center",
            '&:hover': {
              backgroundColor: "#4566C1",
              color: "white"
            },
            // Add additional styles as needed to match your button
          }}
        >
          { editPhotoLoading?'Updating ..':'Update Photo'} {/* Display filename or default text */}
        </Button>
      </label>
      {/* </div> */}
              <TextField
                readOnly={false}
                placeholder='Name'
                defaultValue={userProfile.name}
                id="name"
                variant='outlined'
                InputProps={{
                  style: { color: 'white' }, // Color of the input value
                }}
                InputLabelProps={{
                  style: { color: 'white' }, // Color of the placeholder
                }}

                sx={{
                  width: "100%", backgroundColor: "transparent", color: "white", borderRadius: "10px", height: "3rem", marginBottom: "1rem",
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      border: '1px solid grey',
                    },
                  },
                  '&:hover': {
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'white', // Border color on hover
                      },
                    },
                }
              }
              }
              >

              </TextField>
              <TextField
                placeholder='Username'
                value={userProfile.username}
                id="username"
                variant='outlined'
                InputProps={{
                  style: { color: 'white' }, // Color of the input value
                }}
                InputLabelProps={{
                  style: { color: 'white' }, // Color of the placeholder
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
                        borderColor: 'white', // Border color on hover
                      },
                    },
                }

                }}
              >

              </TextField>
              <TextField
                placeholder='Email'
                value={userProfile.email}
                id="email"
                variant='outlined'
                InputProps={{
                  style: { color: 'white' }, // Color of the input value
                }}
                InputLabelProps={{
                  style: { color: 'white' }, // Color of the placeholder
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
                        borderColor: 'white', // Border color on hover
                      },
                    },
                }
                }}
              ></TextField>

              <TextField
                type='password'
                placeholder="Password"
                id="password"
                required
                InputProps={{
                  style: { color: 'white' }, // Color of the input value
                }}
                InputLabelProps={{
                  style: { color: 'white' }, // Color of the placeholder
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
                        borderColor: 'white', // Border color on hover
                      },
                    },
                }
                }}
              ></TextField>
              {!editLoading ? (
                <Button onClick={() => updateProfile()} sx={{
                  color: "white", backgroundColor: "#253B8E", borderRadius: "8px", height: "45px", marginBottom: "1rem", '&:hover': {
                    backgroundColor: "#4566C1",

                  }
                }}>Edit Profile</Button>
              ) : (<Button sx={{
                color: "white", backgroundColor: "#253B8E", borderRadius: "8px", height: "45px", marginBottom: "1rem", '&:hover': {
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

export default Profile
