import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import {useState , useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { auth, fireStore } from "../firebase";
import { toast } from "react-hot-toast";

const useRegister = ()=> {
    const [fullName,setFullName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const navigate = useNavigate();
    const handleSignUp = e =>{
      e.preventDefault();
      
        createUserWithEmailAndPassword(auth,email,password).then((credential)=>{
          addDoc(collection(fireStore , "users"),{
            id:credential.user.uid,
            displayName:fullName , 
            Email:email , 
            Password:password,
            auth:"user"
          }).then(()=>{
            toast.success(" تم إنشاء الحساب  بنجاح سيتم تحويلك الي صفحة تسجيل الدخول ")
            setFullName("")
            setEmail("")
            setPassword("")
            setTimeout(()=>{
              navigate("/")
            },1500)
          }).catch(error=>{
            toast.error(error.message)
          })
        }).catch(error =>{
          toast.error(error.message);
        })
    }
    return {handleSignUp , email, fullName , password , setFullName , setEmail ,setPassword}

}

export default useRegister;