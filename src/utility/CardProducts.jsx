import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ShoppingCart } from '@mui/icons-material';
import { Link } from 'react-router-dom';
const CardProducts = ({product , addToCart}) => {
    console.log(product)
    const handleCart = ()=>{
        addToCart(product)
     }
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 col-sm-12">
        <Card style={{ margin:"10px" }}>
    
                <Link to={`/products/${product?.productId}`} style={{ textDecoration: 'none', cursor:"pointer" }}>
                    <Card.Img style={{ height: "228px", width: "100%" }} src={product?.image} />
                </Link>
                
            <Card.Body>
                <Card.Title>{product?.title}</Card.Title>
                <Card.Text className='text-center font-bold' style={{fontSize:"24px"}}>
                    {product?.price} ر.س
                </Card.Text>
                <Button variant="danger" style={{width:"100%",display:"flex",justifyContent:"space-between"}} onClick={handleCart}>
                    <span>أضف للسلة</span>
                    <ShoppingCart color="primary" />
                </Button>
            </Card.Body>
        </Card>
    </div>    
  );
}



export default CardProducts