import { toast } from "react-hot-toast";
import useCurrentId from "./CurrentIdUserHook"
import { useNavigate } from "react-router-dom";

const useAddToCart = (product)=>{
    const uid = useCurrentId();
    const navigate = useNavigate();
    if(uid !== null) {
        console.log(product)
    }else{
        toast.error("من فضلك قم بتسجيل الدخول ");
        setTimeout(()=>{
            navigate("/login");
        },1500)
    }
}

export default useAddToCart ; 