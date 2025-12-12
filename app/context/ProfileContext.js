"use client"
import {createContext, useContext, useState} from "react";
const ProfileContext = createContext();
export function ProfileProvider({children}){
    const [profile,setProfile]=useState({
        name:"", 
        age:"",
        email:"",
         password:"",
         adress:""
        });
    return(
        <ProfileContext.Provider value={{profile,setProfile}}>
            {children}
        </ProfileContext.Provider>
    );
}
//write <ProfileProvider> in layout.js to use this context globally
    export function useProfile(){
        return useContext(ProfileContext);
    }
