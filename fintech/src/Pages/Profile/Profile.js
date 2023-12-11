import React, { useEffect, useState } from 'react'
import Styles from "./profile.module.css"
import { TextField, Button, Typography } from '@mui/material'
import axios from 'axios'
import Input from '@mui/material/Input'
import  {useUserContext}  from '../../Auth/UserContext';

const Profile = () => {
  const { myUser, signin, signout } = useUserContext();
  const [editPhotoLoading,setEditPhotoLoading]=useState(false)
  const [userProfile, setUserProfile] = useState(myUser)
  const [loading, setLoading] = useState(true)
  const [editLoading, setEditLoading] = useState(false)


  const fetchProfile = async () => {
    await axios.get(`${process.env.REACT_APP_PATH}/user/read/${myUser.id}`)
      .then((res) => {
        console.log("fetchigg")

        setUserProfile(res.data);
        console.log("fetchinggg")
        console.log(res.data)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching Profile:", error);
        setLoading(false)

      });
  }

  useEffect(() => {
    fetchProfile()
  }
    , []
  )

  const updateProfile = async () => {
    console.log("updatingg...")
    setEditLoading(true)
    // const username = document.querySelector('#username').value.trim()
    // const email = document.querySelector('#email').value.trim()
    const password = document.querySelector('#password').value.trim()
    const name = document.querySelector('#name').value.trim()

    console.log(name)
    // console.log(username)
    // console.log(email)
    console.log(password === '')

    const requestedData = {
      // username: username,
      // email: email,
      name: name
    }

    if (password !== '') {
      requestedData.password = password
    }
    
    console.log(requestedData)
    
    try {
      const res = await axios.put(`${process.env.REACT_APP_PATH}/user/update/${myUser.id}`, requestedData)
      if (res) {
        console.log('profile updated!!')
        await fetchProfile()
        setEditLoading(false)

      }

    } catch (error) {
      console.error("Error updating Profile:", error);
      setEditLoading(false)

    }

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

const res=await axios.patch(`${process.env.REACT_APP_PATH}/user/update/pic/${myUser.id}`,formData,{
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
          </div>
          <div className={Styles.left}>
            <form className={Styles.form} style={{ display: "flex",marginTop:"", flexDirection: "column", color: "white", width: "60%", height: "80%" }}>

              <Typography variant="h4" sx={{ alignSelf: "center", color: "white",width:"200px",height:"200px"}}>     
                       <img src={`${process.env.REACT_APP_PATH}/${myUser.pic}`} className={Styles.image} alt="user profile"></img>
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

            border:"1px solid white",
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
          }}
        >
          { editPhotoLoading?'Updating ..':'Update Photo'} 
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
                  },
                  '&:hover': {
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'white', 
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
                placeholder='Email'
                value={userProfile.email}
                id="email"
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
                type='password'
                placeholder="Password"
                id="password"
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
