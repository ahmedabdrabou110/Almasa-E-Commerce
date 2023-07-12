import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, fireStore } from "../firebase";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-hot-toast";
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, getDocs } from "firebase/firestore";
const useLogin = ()=>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
   
    
    const handleLogin = e =>{
        e.preventDefault();
        
        signInWithEmailAndPassword(auth , email, password).then(()=>{
            getDocs(collection(fireStore , "users")).then(snapShat => {
                const data = snapShat.docs.map(item => {
                    return item.data()
                }).filter(item => item.auth === "admin");
            if(data[0].auth === "admin") {
                toast.success(" تم التسجيل بنجاح و سيتم تحويلك الي الصفحة الرئيسية للأدمن ❤" );
                setTimeout(()=>{
                    navigate("/admin/allproducts");
                },1500)
            }
        }).catch(error => {
            toast.error(error.message);
        })
    })
    
    signInWithEmailAndPassword(auth , email, password).then(()=>{
        getDocs(collection(fireStore , "users")).then(snapShat => {
            const data = snapShat.docs.map(item => {
                return item.data()
            }).filter(item => item.auth === "user");
        if(data[0].auth === "user") {
            toast.success(" تم التسجيل بنجاح و سيتم تحويلك الي الصفحة الرئيسية  ❤" );
            setTimeout(()=>{
                navigate("/");
            },1500)
        }
    }).catch(error => {
        toast.error("البريد الالكتروني او الباسورد غير صحيح");
    })
})
    }
    return {email, password, setEmail , setPassword , handleLogin};
}

export default useLogin;