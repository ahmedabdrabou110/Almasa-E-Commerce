import { useEffect, useState } from "react";
// import useCurrentId from "./CurrentIdUserHook";
import { onAuthStateChanged } from "firebase/auth"
import { auth, fireStore } from "../firebase";
import { getDocs , collection } from "firebase/firestore"
const useGetDataFromCart = ()=>{

    const [cartProduct , setCartProduct] = useState([]);
    useEffect(()=>{
        onAuthStateChanged(auth ,async  user =>{
            if(user) {
                const allData = await getDocs(collection(fireStore , `cart ${user.uid}`));
                const newCartProduct = allData.docs.map(doc =>({
                    ID:doc.id ,
                    ...doc.data()
                }) )
                setCartProduct(newCartProduct);
            }
        })
    },[]) 
    
    return cartProduct ;
}

export default useGetDataFromCart ;