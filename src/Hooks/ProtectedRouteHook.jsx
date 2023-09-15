import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth, fireStore } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'

const ProtectedRouteHook = () => {

    

    const [isUser, setIsUser] = useState()
    const [isAdmin, setIsAdmin] = useState()
    const usersCollectionRef = collection(fireStore, "users");
    useEffect(() => {
        onAuthStateChanged(auth,(user) => {
            if(user) {
              getDocs(usersCollectionRef ,user.uid).then(snapshot => {
                const item = snapshot.docs.filter(email => email.data().id === user.uid);
                const auth = item[0].data().auth ; 
                if(auth === "admin") {
                    setIsAdmin(true);
                    setIsUser(true);
                }else{
                    setIsAdmin(false);
                    setIsUser(true);
                    
                }
              }).catch(error => {
                console.log("error")
              })
            }else{
              setIsAdmin(false);
              setIsUser(false);
            }
            
          })
    },[])


    return [isUser, isAdmin]
}

export default ProtectedRouteHook