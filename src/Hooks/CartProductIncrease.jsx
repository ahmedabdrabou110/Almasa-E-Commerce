import { onAuthStateChanged } from "firebase/auth"
import { auth, fireStore } from "../firebase";
import { updateDoc , collection , doc } from "firebase/firestore"
import useCurrentId from "./CurrentIdUserHook";
import { toast } from "react-hot-toast";
const uid = useCurrentId();
let Product ; 
const useCartProductdecrease = (cartItem)=>{
            Product = cartItem ; 
            Product = cartItem ;
            Product.qty = Product.qty - 1 ; 
            Product.totalPrice = Product.qty * Product.price ; 
            if(Product.qty > 1) {
                onAuthStateChanged(auth , user => {
                    if(user) {
                        const collectionRef = collection(fireStore , `cart ${uid}`);
                        const docRef  = doc(collectionRef , Product.ID);
                        updateDoc(docRef, {...Product}).then(()=> {
                            toast.success("تم نقص المنتج");
                            location.reload()
                        })
                    }else{
                        toast.error("قم بتسجيل الدخول اولا ");
                    }
                })
            }
            
}

export default useCartProductdecrease ;