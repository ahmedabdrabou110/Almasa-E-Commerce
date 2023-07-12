import React,{useState , useEffect} from "react";
import {onAuthStateChanged}from "firebase/auth"
import {auth } from "../firebase";
const useCurrentId = ()=>{
    const [uid,setUid]  = useState(null)
    useEffect(()=>{
        onAuthStateChanged(auth , user =>{
            if(user) {
                setUid(user.uid);
            }
        });
    })

    return uid ;
}

export default useCurrentId ; 
