import { createContext, useContext, useState } from "react";
// import { getUserInfo } from '../Auth/UserService';
import Cookies from "js-cookie";


const UserContext = createContext();

export const useUserContext = () => {
    return useContext(UserContext);
  };  

export const UserProvider = ({children}) =>{
    const [myUser, setMyUser] = useState();

   

    const signin = (userInfo) =>{
        setMyUser(userInfo);
                // console.log("in useContext", myUser);

    }
    const signout = () =>{
        setMyUser(null);
    }


    

    return (
        <UserContext.Provider value={{ myUser, signin, signout }}>
            {children}
        </UserContext.Provider>
    );
};


