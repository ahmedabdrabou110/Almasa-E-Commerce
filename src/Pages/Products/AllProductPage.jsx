import { collection, doc, setDoc } from 'firebase/firestore'
import React from 'react'
import { fireStore } from '../../firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import useRetriveProduct from '../../Hooks/RetriveProductsHook';
import useCurrentId from '../../Hooks/CurrentIdUserHook';
import { useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import CardProducts from '../../utility/CardProducts';
import { Container, Row } from 'react-bootstrap';

const AllProductPage = () => {
    let Product  ;
    const products = useRetriveProduct();
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
                location.reload();
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
    <Container style={{height:"auto"}}>
        <Row>
        <Toaster />
        
        {
                products.map(product => (
                  <CardProducts key={product.productId} product={product} addToCart={addToCart} />
                ))
               }

                    {
                        products.length < 1 && <h1>Please wait ...</h1>
                    }
        </Row>
    </Container>
  )
}

export default AllProductPage