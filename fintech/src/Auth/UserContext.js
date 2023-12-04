import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUserContext = () => {
    return useContext(UserContext);
  };  

export const UserProvider = ({children}) =>{
    const [user, setUser] = useState(null);

    const signin = (userinfo) =>{
        setUser(userinfo);
    }
    const signout = () =>{
        setUser(null);
    }

    return (
        <UserContext.Provider value={{ user, signin, signout }}>
            {children}
        </UserContext.Provider>
    );
};


