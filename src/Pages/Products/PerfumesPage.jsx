import { collection, doc, setDoc } from 'firebase/firestore'
import React from 'react'
import { fireStore } from '../../firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Container, Row } from 'react-bootstrap';
import useCurrentId from '../../Hooks/CurrentIdUserHook';
import { Toaster, toast } from 'react-hot-toast';
import CardProducts from '../../utility/CardProducts';
import useRetriveProduct from '../../Hooks/RetriveProductsHook';
import { useNavigate } from 'react-router-dom';

const PerfumesPage = () => {
    let Product  ;
    const products = useRetriveProduct();
    const uid = useCurrentId();
    const navigate = useNavigate()
    const accessoriesProduct = products?.filter(item => item?.mainCategory === "عطورات")    
    
    const addToCart = (product)=>{
        if(uid !== null) {
            Product = product ;
            Product["qty"] = 1  ;
            Product["totalPrice"] = Product.qty * Product.price ;
            const collectionRef = collection(fireStore , `cart ${uid}`);
            const docRef  = doc(collectionRef , Product?.ID);
            
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
    <Container style={{height:"678px"}}>
        <Toaster />
        <Row>
            {accessoriesProduct?.length > 0 && accessoriesProduct?.map(product => (
                <CardProducts key={product.ID} product={product} addToCart={addToCart}/>
            ))}

            {accessoriesProduct?.length < 1 && <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <h1>لا توجد منتجات حاليا</h1>
            </div>}
        </Row>
    </Container>
  )
}

export default PerfumesPage