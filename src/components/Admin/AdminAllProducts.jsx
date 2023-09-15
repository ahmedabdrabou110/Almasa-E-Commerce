import React from 'react'
import { Row } from 'react-bootstrap'
import AdminAllProductsCard from './AdminAllProductsCard'
import useCurrentId from '../../Hooks/CurrentIdUserHook'
import { useNavigate } from 'react-router-dom'
import useRetriveProduct from '../../Hooks/RetriveProductsHook'
import { Toaster, toast } from 'react-hot-toast'
import { fireStore } from '../../firebase'
import { collection, doc, setDoc } from 'firebase/firestore'

const AdminAllProducts = () => {
    let Product  ;
    const products = useRetriveProduct ();
    const uid = useCurrentId();
    const navigate = useNavigate()
    const addToCart = (product)=>{
        if(uid !== null) {
            Product = product ;
            Product["qty"] = 1  ;
            Product["totalPrice"] = Product.qty * Product.price ;
            const collectionRef = collection(fireStore , `cart ${uid}`);
            const docRef  = doc(collectionRef , Product.ID);
            
            setDoc(docRef , Product).then(()=>{
                toast.success("تم اضافة المنتج الي العربة");
            }).catch(error => {
                toast.error("فشل اضافة المنتج الي العربة");
            });

        }else{
            toast.error("من فضلك قم بتسجيل الدخول ");
            setTimeout(()=>{
                navigate("/login");
            },1500)
        }
    }
    return (
        <div style={{overflowY:"scroll" , overflowX:"hidden"}}>
            <Toaster />
            {/* <div className='admin-content-text'>ادارة جميع المنتجات</div> */}
            <Row className='justify-content-start'>
            {
                        products.length > 0 && products.map(product => (
                            <AdminAllProductsCard  product={product} addToCart={addToCart}  />
                        ))
                    }

                    {
                        products.length < 1 && <h1>Please wait ...</h1>
                    }
            </Row>
            
        </div>
    )
}

export default AdminAllProducts
