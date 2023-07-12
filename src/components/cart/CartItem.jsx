import React from 'react'
import { Add, Delete, Remove } from '@mui/icons-material'
import {  Col, Row } from 'react-bootstrap'
import {Icon} from 'react-icons-kit'
import plus from 'react-icons-kit'
import minus from 'react-icons-kit'
const CartItem = ({cartProduct ,cartProductIncrease , cartProductDecrease , cartProductDelete }) => {
  
  const handleCartProductIncrease = ()=>{
    cartProductIncrease(cartProduct);
  }

  const handleCartProductDecrease = ()=>{
    cartProductDecrease(cartProduct)
  }

  const handleDeleteProduct =()=>{
    cartProductDelete(cartProduct);
  }
  


  return (
    <Col xs="12" className="cart-item-body my-2 d-flex px-2">
        <img width="120px" height="160px" style={{margin:"10px" , borderRadius:"8px"}} src={cartProduct.image} alt="" />
        <div className="w-100">
          <Row className="justify-content-between">
            <Col sm="12" className=" d-flex flex-row justify-content-between">
              <div className="d-inline pt-2 cat-text">{cartProduct.title}</div>
              <div className="d-flex pt-2 btn m-2 btn-danger" style={{ cursor: "pointer" }}  onClick={handleDeleteProduct} >
                <Delete />
                <div className="text-white  d-inline me-2">ازاله</div>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center mt-2">
            <Col sm="12" className=" d-flex flex-row justify-content-start">
              <div className="d-inline pt-2 cat-title">
                {cartProduct.description}              
              </div>
              <div className="d-inline pt-2 cat-rate me-2">4.5</div>
            </Col>
          </Row>
          <Row>
            <Col sm="12" className="mt-1">
              <div className="cat-text d-inline">الخامة :</div>
              <div className="barnd-text d-inline mx-1">{cartProduct.brand} </div>
            </Col>
          </Row>
          <Row>
            {/* <Col sm="12" className="mt-1 d-flex">
              <div
                className="color ms-2 border"
                style={{ backgroundColor: "#E52C2C" }}></div>
            </Col> */}
          </Row>
  
          <Row className="justify-content-between">
            <Col sm="12" className=" d-flex flex-row justify-content-between">
              <div className="d-inline pt-2 d-flex">
              <div className='product-text quantity-box' style={{width:"100px"}}>
                <div className='action-btns minus' onClick={handleCartProductIncrease} >
                    <Add fontSize='20px'/>
                </div>                
                <div>{cartProduct.qty}</div>               
                <div className='action-btns plus' onClick={handleCartProductDecrease} >
                    <Remove fontSize='20px'/>
                </div>
              </div>
              </div>
              <div className="d-inline pt-2 barnd-text">{cartProduct.totalPrice} ر.س</div>
            </Col>
          </Row>
        </div>
      </Col>
  )
}

export default CartItem