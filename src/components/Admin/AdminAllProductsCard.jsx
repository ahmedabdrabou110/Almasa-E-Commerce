import React from 'react'
import { Col,Card,Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Product1 from '../../assets/product1.jpg'
import { auth, fireStore } from '../../firebase'
import { Toaster, toast } from 'react-hot-toast'
import { collection, deleteDoc, doc } from 'firebase/firestore'
import DeleteProduct from './DeleteProduct'
import { onAuthStateChanged } from 'firebase/auth'
const AdminAllProductsCard = ({product , addToCart}) => {
    let Product ;
    const cartProductDelete =(product) => {
        Product = product ;
        onAuthStateChanged(auth , user=> {
            if(user) {
                const collectionRef = collection(fireStore , `products`);
                const docRef = doc(collectionRef , Product.ID);
                deleteDoc(docRef).then(()=>{
                    toast.success("تم حذف المنتج نهائيا بنجاح");
                    location.reload();
                })
                const productRef = collection(fireStore , `cart ${user.uid}`);
                const proRef = doc(productRef , Product.ID);
                deleteDoc(proRef) ;
            }
        })
    }

    return (
        
        <Col xs="12" sm="6" md="5" lg="3" className="d-flex">
            <Toaster />
            <Card
            
                className="my-2"
                style={{
                    width: "100%",
                    height: "400px",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "#FFFFFF",
                }}>
                <Row className="d-flex justify-content-center px-2 m-2">
                    <Col className=" d-flex justify-content-between">
                        <DeleteProduct product={product} cartProductDelete={cartProductDelete} />
                        <Link to={`/admin/product/${product.productId}/edit`} className="d-inline item-delete-edit btn btn-warning text-white">تعديل</Link>
                    </Col>
                </Row>
                <Link to={`/products/${product.productId}`} style={{ textDecoration: "none" }}>
                    <Card.Img style={{ height: "228px", width: "100%" }} src={product.image} />
                    <Card.Body>
                        <Card.Title>
                            <div className="card-title">
                                {product.title}
                            </div>
                        </Card.Title>
                        <Card.Text>
                            <div className="d-flex justify-content-between">
                                <div className="card-rate">4.5</div>
                                <div className="d-flex">
                                    <div className="card-currency mx-1">جنيه</div>
                                    <div className="card-price">{product.price}</div>
                                </div>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Link>
            </Card>
        </Col>
        
    )
}

export default AdminAllProductsCard
