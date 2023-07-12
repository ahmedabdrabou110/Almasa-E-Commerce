import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import useRetriveProduct from '../../Hooks/RetriveProductsHook';
import { collection, doc, setDoc } from 'firebase/firestore';
import { fireStore } from '../../firebase';
import useCurrentId from '../../Hooks/CurrentIdUserHook';
import AddToCart from './AddToCart';
import { Toaster, toast } from 'react-hot-toast';

const ProductText = () => {
  const products =  useRetriveProduct();
    const param = useParams();
    const product = products.filter(item => item.productId === param.id)[0];
    let Product  ;
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
        <div>
          <Toaster />
      <Row className="mt-2">
        <div className="cat-text">جلاليب</div>
      </Row>
      <Row>
        <Col md="8">
          <div className="cat-title d-inline">
            {product?.title}
            <div className="cat-rate d-inline mx-3">4.5</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-4">
          <div className="cat-text d-inline">الماركة :</div>
          <div className="barnd-text d-inline mx-1">{product?.brand} </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-1 d-flex">
          <div
            className="color ms-2 border"
            style={{ backgroundColor: "#E52C2C" }}></div>
          <div
            className="color ms-2 border "
            style={{ backgroundColor: "white" }}></div>
          <div
            className="color ms-2 border"
            style={{ backgroundColor: "black" }}></div>
        </Col>
      </Row>

      <Row className="mt-4">
        <div className="cat-text">المواصفات :</div>
      </Row>
      <Row className="mt-2">
        <Col md="10">
          <div className="product-description d-inline">
            {product?.description}
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="12">
          <div className="product-price d-inline px-3 py-3 border">{product?.price} جنية</div>
          <AddToCart product = {product} addToCart={addToCart} />
        </Col>
      </Row>
    </div>
    )
}

export default ProductText
