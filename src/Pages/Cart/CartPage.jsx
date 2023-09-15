import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CartCheckout from '../../components/cart/CartCheckout'
import { onAuthStateChanged } from 'firebase/auth'
import { auth, fireStore } from '../../firebase'
import { collection, doc,  updateDoc  , deleteDoc} from 'firebase/firestore'
import { Toaster, toast } from 'react-hot-toast'
import { ShoppingCart } from '@mui/icons-material'
import IndividualCard from '../../components/cart/IndividualCard'
import useCurrentId from '../../Hooks/CurrentIdUserHook'
import useGetDataFromCart from '../../Hooks/GetDataFromCart'
import useGetTotalPrice from '../../Hooks/GetTotalPriceOfCart'

const CartPage = () => {
    const uid = useCurrentId();
    let Product ; 
    //Get data from Cart
    const cartProduct = useGetDataFromCart();
    
    const cartProductDecrease = cartItem => {
        Product = cartItem ; 
        Product = cartItem ;
            Product.qty = Product.qty - 1 ; 
            Product.totalPrice = Product.qty * Product.price ; 
            if(Product.qty > 1) {
                onAuthStateChanged(auth , user => {
                    if(user) {
                        const collectionRef = collection(fireStore , `cart ${uid}`);
                        const docRef  = doc(collectionRef , Product.ID);
                        updateDoc(docRef, {...Product}).then(()=>{
                            toast.success("تم نقص المنتج");
                            location.reload()
                        })
                    }else{
                        toast.error("قم بتسجيل الدخول اولا ");
                    }
                })
            }
            
    }

    
    
    const cartProductIncrease = (cartItem)=>{
            Product = cartItem ;
            Product.qty = Product.qty + 1 ; 
            Product.totalPrice = Product.qty * Product.price ; 
            if(Product.qty > 100) {
                toast.error("لا يمكن طاب اكتر من 100 منتج");
            }
            onAuthStateChanged(auth , user => {
                if(user) {
                    const collectionRef = collection(fireStore , `cart ${uid}`);
                    const docRef  = doc(collectionRef , Product.ID);
                    updateDoc(docRef, {...Product}).then(()=>{
                        toast.success("تم زيادة المنتج");
                        location.reload()
                    })
                }else{
                    toast.error("قم بتسجيل الدخول اولا ");
                }
            })
    }
//    console.log(cartProduct)

    const cartProductDelete =(cartItem) => {
        Product = cartItem ;
        onAuthStateChanged(auth , user=> {
            if(user) {
                const collectionRef = collection(fireStore , `cart ${uid}`);
                const docRef = doc(collectionRef , Product.ID);
                console.log(docRef)
                deleteDoc(docRef).then(()=>{
                    toast.success("تم حذف المنتج من لعربة بنجاح");
                    location.reload();
                })
            }
        })
    }

    
    const totalPrice = useGetTotalPrice();
    
  return (
    <Container style={{ minHeight: '670px' }}>
        <Toaster />
            <Row>
                <div className='cart-title mt-4'>عربة التسوق</div>
            </Row>
            <Row className='d-flex justify-content-center'>

                {
                    cartProduct.length < 1 && (
                        <div style={{height : "600px"}} className='d-flex justify-content-center align-items-center'>
                            <div className='d-flex align-items-center'>
                            <ShoppingCart fontSize='large' />
                            <p style={{marginRight:"10px" , marginTop:"5px" , fontSize:"20px"}}>السلة فارغة 💔</p>
                            </div>
                        </div>
                    )
                }

                {
                    cartProduct.length > 0 && (
                        <>
                            <Col xs="12" md="9">
                                {
                                    <IndividualCard cartProducts={cartProduct} cartProductIncrease={cartProductIncrease} cartProductDecrease={cartProductDecrease} cartProductDelete={cartProductDelete}  />
                                }
                            </Col>
            
                            <Col xs="6" md="3">
                                <CartCheckout totalPrice={totalPrice} />
                                
                            </Col>
                        </>
                    )
                }
            </Row>
        </Container>
  )
}

export default CartPage