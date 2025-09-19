import axios from "axios";
import { createContext, useEffect } from "react";
import { useState } from "react";
export const UserContext = createContext();

function UserProvider({children}){
    const [loginUser,setLoginUser]= useState(null);
    useEffect(()=>{

        axios
        .get("https://zzzmini.github.io/js/userdata.json")
        .then((res)=>setLoginUser(res.data))
        .catch((error)=>console.log("Error:",error))
    },[])
    return(
        <UserContext.Provider value={{loginUser,setLoginUser}}>
            {children}
        </UserContext.Provider>
    )
}
export default UserProvider