import React from 'react'
import { Container, Row } from 'react-bootstrap'
import CardProducts from '../../utility/CardProducts'
import SubTitle from '../../utility/SubTitle'
import useRetriveProduct from '../../Hooks/RetriveProductsHook'
import useCurrentId from '../../Hooks/CurrentIdUserHook'
import { useNavigate } from 'react-router-dom'
import { collection, doc, setDoc } from 'firebase/firestore'
import { fireStore } from '../../firebase'
import { Toaster, toast } from 'react-hot-toast'

const ProductsContainer = ({title ,btnTitle }) => {
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
  // console.log(products)
  return (
    <Container>
      <Toaster />
            <SubTitle  title={title} btnTitle={btnTitle} />
            <Row className='my-2 d-flex justify-content-between'>
               {
                products.map(product => (
                  <CardProducts key={product.productId} product={product} addToCart={addToCart} />
                ))
               }
               
            </Row>
        </Container>
  )
}

export default ProductsContainer