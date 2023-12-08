import { Outlet, Navigate } from "react-router-dom"
import { useUserContext } from "./UserContext"


export default function PrivateRoute() {
    const {myUser} = useUserContext()
    console.log("this is in privateRoute", myUser)
  return (myUser) ? <Outlet/> : <Navigate to='/signin'/>

  
}
