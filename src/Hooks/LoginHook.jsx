import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, fireStore } from "../firebase";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-hot-toast";
import { useCollection, useCollectionData } from 'react-firebase-hooks/firestore';
import { collection, getDocs } from "firebase/firestore";
const useLogin = ()=>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
   const collectionRef = collection(fireStore , "users");
   const [users] = useCollectionData(collectionRef);
    
    const handleLogin = e =>{
        e.preventDefault();
        
        signInWithEmailAndPassword(auth , email, password).then(()=>{
            
                const data = users.map(item => item).filter(item => item.auth === "admin")
            if(data.auth === "admin") {
                toast.success(" تم التسجيل بنجاح و سيتم تحويلك الي الصفحة الرئيسية للأدمن ❤" );
                setTimeout(()=>{
                    navigate("/admin/allproducts");
                },1500)
            }else{
                toast.success(" تم التسجيل بنجاح و سيتم تحويلك الي الصفحة الرئيسية  ❤" );
                setTimeout(()=>{
                    navigate("/");
                },1500)
            }
        }).catch(error => {
            toast.error("البريد الالكتروني او الباسورد غير صحيح");
        })    
    }
    return {email, password, setEmail , setPassword , handleLogin};
}

export default useLogin;