import { PayPalButtons } from '@paypal/react-paypal-js'
import { addDoc, collection, deleteDoc, doc, getDocs, setDoc } from 'firebase/firestore';
import React, { useState } from 'react'
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { fireStore } from '../../firebase';
import useCurrentId from '../../Hooks/CurrentIdUserHook';

const PaypalCheckoutButtons = (props) => {
    const uid = useCurrentId()
    const {product , infoDetails} = props 
    const [paidFor , setPaidFor] = useState(false);
    const [error , setError] = useState(null);
    const navigate = useNavigate();
    const handleApprove = orderId => {
        setPaidFor(true);
    }

    const paid = async() =>{
        const userData = (
            await getDocs(collection(fireStore, "users"), uid)
          ).docs
            .filter((item) => item.data().id === uid)
            .map((data) => {
              return data.data();
            });
            
          addDoc(collection(fireStore, "Buyer-Personal-Info-card"), {
            ...infoDetails,
            Email: userData[0].Email,
            id: userData[0].id,
            state: "قيد التنفيذ",
            medthod:"visa"
            
          });
          const cartData = await getDocs(collection(fireStore, `cart ${uid}`));
          
          for (let snap of cartData.docs) {
            const data = snap.data();
            data.id = snap.id;
            data.ID = uid;
            console.log(snap)
            data.state = "قيد التنفيذ"
            await setDoc(doc(collection(fireStore, `Buyer-cart${uid}`), data.id),{ data } );
            await deleteDoc(doc(collection(fireStore, `cart ${uid}`), snap.id));
          }
          toast.success("تم تنفيذ طلبك و سيصل طلبك في خلال 24 ساعة", {
            duration: 2000,
          });
          setTimeout(() => {
            navigate("/");
          }, 1900);
    }

    if(paidFor) {
        alert("شكرا جدا علي تعاملكم معنا");
        paid()
    }

    if(error) {
        alert("حدث خطا ما ");
    }

  return (
    <>
        <Toaster />
        <PayPalButtons style={{
            color:"silver",
            layout:"horizontal",
            height:48,
            tagline:false,
            shape:"pill",
            
        }} 
        
        createOrder={(data,actions)=>{
            return actions.order.create({
                purchase_units :[{
                    description:"This is a product",
                    amount:{
                        value:product.totalPrice,
                    }
                }]
            })
        }}

        onClick={(data,actions)=>{
            const hasAlreadyPurchased = false;
            if(hasAlreadyPurchased){
                setError("لقد قمت بالشراء ");
                return actions.reject();
            }else{
                return actions.resolve()
               
            }

        }}

        onApprove={async (data , actions) =>{
            const order = await actions.order.capture();
            console.log("Order " ,order );
            handleApprove(data.orderID);
        }}

        onError= {(error) =>{
            setError(error);
            console.log("Error");
        }}

        onCancel={()=>{
            alert("ناسف لالغاء الشراء ");
        }}

        />
    </>
  )
}

export default PaypalCheckoutButtons